/// <reference types="Cypress"/> 

describe('API Interaction Test Suite', function () {
    it('Interacts with the Angular App and Modifies API Response', function () {

        // Intercept the API request to modify its response
        cy.intercept(
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }]
            }
        ).as('bookRetrievals');

        // Visit the Angular app that triggers the intercepted API request
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        // Interact with the app, for example, click a button triggering the API request
        cy.get('.btn.btn-primary').click();

        // Wait for the intercepted API request to complete
        cy.wait('@bookRetrievals');

        // Assert on the modified response or any other elements on the page
        cy.get('p').should('have.text', 'Oops only 1 Book available');
    });
});

describe('Integration Testing with Front end and Back End response validation assertions', function () {
    it('Verify length of response array is equal to rows of the table', function () {
        cy.intercept(
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }]
            }
        ).as('bookRetrievals');

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.get('.btn.btn-primary').click();


        // Wait for the intercepted API request to complete and validate the response
        cy.wait('@bookRetrievals').then(({ request, response }) => {
            // Validate the length of the table rows
            cy.get('tr').should('have.length', response.body.length + 1);
        });

        cy.get('p').should('have.text', 'Oops only 1 Book available');
    });
});

describe('Security Scenarios: Intercepting HTTP Request Details', function () {
    it('Modifying Request URL to Simulate Unauthorized Access', function () {

        // Visit the Angular app that triggers the intercepted API request
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        // Intercept the specific GET request and modify the request URL
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
                // Change the request URL to simulate a different scenario (e.g., unauthorized access)
                req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";

                // Continue with the modified request
                req.continue((res) => {
                    // Modify the response body to contain only one book
                    res.send({
                        statusCode: 200,
                        body: [{
                            "book_name": "Stock Trading",
                            "isbn": "DLPOL",
                            "aisle": "131"
                        }]
                    });
                });
            }
        ).as("dummyUrl");

        // Trigger the intercepted request by interacting with the app
        cy.get("button[class='btn btn-primary']").click();

        // Wait for the intercepted request to complete
        cy.wait('@dummyUrl');

        // Validate the presence of the expected book on the page
        cy.get('tr').should('have.length', 2); // Assuming the header row and one data row
        cy.get('td').should('contain', 'Stock Trading');

        // assert on elements or check for specific behaviors
        cy.get('p').should('have.text', 'Oops only 1 Book available');
    });
});

describe('Direct API Interaction: Modifying Request to Add a Book', function () {
    it('Successfully Adds a Book with Modified Request', function () {

        // Make a POST request directly to the API to add a book with modified details
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Appium Automation with Java",
            "isbn": "efdsvv",
            "aisle": "454567",
            "author": "John foe"
        }).then(function (response) {
            // Validate the response status and message
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('Msg', 'successfully added');

            // If you face issue like Book Already exist just change the isbn & aisle properties
        });
    });
});

