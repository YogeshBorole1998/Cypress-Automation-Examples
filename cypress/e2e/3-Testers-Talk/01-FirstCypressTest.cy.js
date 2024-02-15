/// <reference types="Cypress"/> 

describe('YouTube Search Test Suite', function () {

    it('TC054: should display search results for "Cypress by Testers Talk"', function () {

        cy.log('Test started: Navigating to YouTube');
        cy.visit('https://www.youtube.com/');
        cy.log('Successfully navigated to YouTube');

        cy.get("[name='search_query']").type('Cypress by Testers Talk');
        cy.get('#search-icon-legacy').click();

        // Use .contains() with partial text match to make it flexible
        cy.contains("[title='Cypress by Testers Talk']", 'Cypress by Testers Talk')
            .should('be.visible');

        cy.log('Test completed: Search results for "Cypress by Testers Talk" displayed');
    });
});
