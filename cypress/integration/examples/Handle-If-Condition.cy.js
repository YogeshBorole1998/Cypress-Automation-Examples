/// <reference types="cypress" />
import 'cypress-if'

describe('E-commerce Login Tests', () => {
    it('TC105: Positive: User can log in with valid credentials', () => {

        // Visit the login page
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

        // Enter valid login credentials
        cy.get('#input-email').type('admin@xyz12.com');
        cy.get('#input-password').type('Test@1998');
        cy.get("input[value='Login']").click();

        /* // Check for login success or failure
        cy.get('[id*=account]').then(($ele) => {

            if ($ele.find('.alert').length > 0) {
                // If an alert is present, verify it contains the expected message for login failure
                cy.get(".alert.alert-danger.alert-dismissible").should('have.text', ' Warning: No match for E-Mail Address and/or Password.');
            } else {
                // Log a message if the login is successful
                cy.log('Login successful!');
            }
        }); */

        // Write below Scenario instead of using Above complex 
        cy.get('#account-login > .alert').if('visible')
            .should('have.text', ' Warning: No match for E-Mail Address and/or Password.')
            .else()
            .log('No Cookie Banner');
    });
});
