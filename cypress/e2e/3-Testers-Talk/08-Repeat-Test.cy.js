/// <reference types="cypress" />

describe('Cypress Dynamic Test Cases Suite', function () {

    // Dynamically create two test cases
    Cypress._.times(2, (k) => {
        it(`should execute Cypress Test Case ${k + 1}`, function () {
            // Test Steps/Commands for each dynamic test case
            cy.log(`Test Case ${k + 1}: I am in Test Case ${k + 1}`);
            cy.log(`Dynamic Value: ${k}`);
        });
    });
});
