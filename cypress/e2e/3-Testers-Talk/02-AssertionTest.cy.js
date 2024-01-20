/// <reference types="Cypress"/> 

describe('Google Search Text Assertion Test Suite', function () {

    it('should assert text-related properties in the Google Search textarea', function () {

        // Visit Google search page
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');

        // Assertion 1: Using 'expect' to compare text
        cy.get('textarea[type="search"]').then((element) => {
            expect(element.text()).to.equal('javascript by testers talk');
        });

        // Assertion 2: Using Cypress command to check text
        cy.get('textarea[type="search"]').should('have.text', 'javascript by testers talk');

        // Assertion 3: Using Cypress command to check partial text
        cy.get('textarea[type="search"]').should('contain', 'javascript by testers talk');

        // Assertion 4: Check if the textarea is visible
        cy.get('textarea[type="search"]').should('be.visible');

        // Assertion 5: Using Cypress commands to check HTML attributes
        cy.get('textarea[type="search"]').should('have.html', 'javascript by testers talk')
            .and('have.attr', 'value');

        // Assertion 6: Combining multiple assertions
        cy.get('textarea[type="search"]').should('have.html', 'javascript by testers talk')
            .and('have.attr', 'value')
            .and('contain', 'javascript by testers talk');

        // Assertion 7: Using 'expect' to check the length of the text
        cy.get('textarea[type="search"]').then((element) => {
            expect(element.text()).to.have.length(26);
        });
    });
});
