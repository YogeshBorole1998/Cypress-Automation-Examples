/// <reference types="Cypress"/> 

describe('Google Search Interaction Test Suite', function () {

    it('should interact with elements on the Google Search page', function () {

        // Visit Google search page
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');

        // Log text from the textarea
        cy.get('textarea[type="search"]').then((element) => {
            cy.log('Text from Google Search Input: ' + element.text());
        });

        // Log text from an element with ID 'APjFqb'
        cy.get('#APjFqb').then((element) => {
            cy.log('Text from Element with ID "APjFqb": ' + element.text());
        });

        // Click on the first element with class 'IUOThf'
        cy.get('.IUOThf > a').first().click();

        // Click on the last element with class 'IUOThf'
        cy.get('.IUOThf > a').last().click();

        // Click on the element with index 1 within class 'IUOThf'
        cy.get('.IUOThf > a').eq(1).click();

        // Click on the button with type attribute starting with "sub"
        cy.get('button[type^="sub"]').click();

        // Click on the button with type attribute ending with "mit"
        cy.get('button[type$="mit"]').click();

        // Click on the button with type attribute containing "ubmi"
        cy.get('button[type*="ubmi"]').click();

        // Click on an element containing the text 'Testers Talk'
        cy.contains('Testers Talk').click();

        // // Click on elements using tag names (example: 'button', 'a', etc.)
        // cy.get('button').first().click(); // Click on the first button
        // cy.get('a').last().click(); // Click on the last link (anchor) element
        // cy.get('a').eq(2).click(); // Click on the second link (anchor) element
    });
});
