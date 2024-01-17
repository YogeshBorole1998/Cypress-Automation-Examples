/// <reference types="Cypress"/> 

let productName, productPrice = null;

// Test suite to validate parsing and validation of downloaded Excel file
describe('Excel File Parsing and Validation', function () {
    it('Should parse downloaded Excel file and validate product details', function () {
        // Perform API login and visit the website
        cy.loginAPI().then(function () {
            cy.visit('https://rahulshettyacademy.com/client/', {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            });
        });

        // Capture the product name before adding to the cart
        cy.get('.card-body b').eq(2).then(function (ele) {
            productName = ele.text();
        });

        // Add a product to the cart
        cy.get('.card-body button:last-of-type').eq(2).click();
        cy.get("[routerlink*='cart']").click();

        // Validate cart details
        cy.get("div[class='cartSection'] h3").should('have.text', 'IPHONE 13 PRO');
        cy.get('.stockStatus').should('have.text', ' In Stock');
        cy.get("div[class='prodTotal cartSection'] p").should('have.text', '$ 231500');

        // Proceed to checkout
        cy.contains('Checkout').click();
        cy.get('.item__quantity').should('have.text', ' Quantity: 1 ');
        cy.get('.item__description > ul > li').should('have.text', 'Latest Apple Iphone13 pro with 200mp front camera');

        // Enter the shipping country and place the order
        cy.get("[placeholder*='Country']").type("ind");
        cy.get('.ta-results button').each(($e1, index, $list) => {
            if ($e1.text() === " India") {
                cy.wrap($e1).click();
            }
        });
        cy.get(".action__submit").click();

        // Validate the order completion message
        cy.get('.hero-primary').should('have.text', ' Thankyou for the order. ');

        // Extract product price from the order summary
        cy.get("td[class='line-item product-info-column'] div[class='title']").then(function (price) {
            // Extract text and remove extra spaces and currency symbol
            productPrice = price.text().replace(/\s+/g, '').replace('$', '');
        });

        // Click to download order details in Excel
        cy.get(".order-summary button").contains('Excel').click();

        // Read and parse the downloaded Excel file
        const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_cypress.xlsx";
        cy.task('excelToJsonConvertor', filePath).then(function (result) {
            console.log(result);

            // Assert the product name from Excel matches the captured product name
            expect(productName).to.equal(result.data[1].B);
        });

        // Task Concept: Why Task is important?
        // Cypress tasks are used to interact with Node.js environment (backend), which allows you to perform tasks that are not possible directly in the browser.

        // Shortcut way to read the Excel or csv file content and assert the presence of the product name
        cy.readFile(filePath).then(function (text) {
            expect(text).to.include(productName);
        });
    });
});
