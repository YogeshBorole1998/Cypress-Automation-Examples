/// <reference types="Cypress"/>

// Cypress test suite for an application that changes a CSS variable
describe('CSS Variable Changes Test Suite', () => {
    it('TC096: Starts with a black background', () => {
        // Visit the HTML page with the color-changing application
        cy.visit('change-color-demo.html');

        // Assert that the initial background color is black
        cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)'); // Black Color
    });

    // Instead of using RGB values for assertion, use chai-colors NPM module
    it('TC097: Changes background color', () => {
        // Visit the HTML page with the color-changing application
        cy.visit('change-color-demo.html');

        // Assert that the initial background color is black
        cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)');

        // Select a new color value in the <input type="color"> and trigger "change" event
        cy.get('input[type=color]')
            .invoke('val', '#ff0000')
            .trigger('change');

        // Check if the background color has been changed to red
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 0, 0)');
    });

    it('TC098: Can spy on native methods', () => {
        // Visit the HTML page with the color-changing application
        cy.visit('change-color-demo.html');

        // Assert that the initial background color is black
        cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)');

        // Create a spy and save it under an alias
        cy.document().its('documentElement.style')
            .then((style) => cy.spy(style, 'setProperty').as('setColor'));

        // Change the color using the input and trigger "change" event
        cy.get('input[type=color]')
            .invoke('val', '#ff0000')
            .trigger('change');

        // Check if the background color has been changed to red
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 0, 0)');

        // Find the spy by its alias and confirm it was called as expected
        cy.get('@setColor')
            .should('have.been.calledWith', '--background-color', '#ff0000');
    });
});
