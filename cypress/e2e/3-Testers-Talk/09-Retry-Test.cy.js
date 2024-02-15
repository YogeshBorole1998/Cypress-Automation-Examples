/// <reference types="cypress" />

describe('Google Search Interaction Test Suite', { retries: 2 }, function () {

    it('TC061: should visit Google search page and interact with elements', function () {
        // Step 1: Visit Google search page
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');

        // Step 2: Log text from the search input textarea
        cy.get('textarea[name="q"]').then((element) => {
            cy.log('Text from Google Search Input: ' + element.text());
        });

        // Step 3: Log text from an element with ID "APjFqb"
        cy.get('#APjFqb').then((element) => {
            cy.log('Text from Element with ID "APjFqb": ' + element.text());
        });

        // Step 4: Intentional failure to trigger a retry
        cy.get('#nonexistent-element').should('exist');
    });
});
