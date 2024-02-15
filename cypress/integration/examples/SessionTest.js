/// <reference types="Cypress"/> 

// Test suite to validate JWT session management
describe('JWT Session Management Test Suite', function () {
    it('TC109: Logs in through API and sets token in local storage', function () {

        // Log in through API and obtain the authentication token
        cy.loginAPI().then(function () {
            // Visit the application, setting the authentication token in local storage before loading
            cy.visit('https://rahulshettyacademy.com/client/', {
                // Custom handling before the application loads
                onBeforeLoad: function (window) {
                    // Set the authentication token in local storage
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            });
        });
    });
});

// Test suite to validate the end-to-end flow of purchasing an order with UI Script
describe('End-to-End Purchase Order Flow with UI Script', function () {
    it('TC110: Completes the entire process of purchasing an order', function () {

        // Log in through API and obtain the authentication token
        cy.loginAPI().then(function () {
            // Visit the application, setting the authentication token in local storage before loading
            cy.visit('https://rahulshettyacademy.com/client/', {
                // Custom handling before the application loads
                onBeforeLoad: function (window) {
                    // Set the authentication token in local storage
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            });
        });

        // Navigate to the desired product and add it to the cart
        cy.get('.card-body button:last-of-type').eq(2).click();

        // Navigate to the cart and perform assertions on the items
        cy.get("[routerlink*='cart']").click();
        cy.get("div[class='cartSection'] h3").should('have.text', 'IPHONE 13 PRO');
        cy.get('.stockStatus').should('have.text', ' In Stock');
        cy.get("div[class='prodTotal cartSection'] p").should('have.text', '$ 231500');

        // Proceed to checkout and validate the order details
        cy.contains('Checkout').click();
        cy.get('.item__quantity').should('have.text', ' Quantity: 1 ');
        cy.get('.item__description > ul > li').should('have.text', 'Latest Apple Iphone13 pro with 200mp front camera');

        // Enter the shipping country and proceed to payment
        cy.get("[placeholder*='Country']").type("ind");
        cy.get('.ta-results button').each(($e1, index, $list) => {
            if ($e1.text() === " India") {
                cy.wrap($e1).click();
            }
        });
        cy.get(".action__submit").click();

        // Validate the order completion message
        cy.get('.hero-primary').should('have.text', ' Thankyou for the order. ');

        // Click to download order details in CSV
        cy.get(".order-summary button").first().click();

        // Click to download order details in Excel
        cy.get(".order-summary button").eq(1).click();
    });
});
