/// <reference types="Cypress"/> 

describe('Cypress Actions Test Suite', function () {

    it('should demonstrate various actions on the Cypress Commands and Actions page', function () {

        // Step 1: Visit the Cypress Commands and Actions page
        cy.visit('https://example.cypress.io/commands/actions');

        // Step 2: Demonstrate using cy.select() on the dropdown with class 'form-control.action-select'
        // cy.get('.form-control.action-select').select(2); // Index
        // cy.get('.form-control.action-select').select('bananas'); // Visible Text
        cy.get('.form-control.action-select').select('fr-oranges'); // Value
    });
});

