/// <reference types="Cypress" />

describe('Multiple Keyboard Button Handling', () => {
  it('TC066: should handle various keyboard button presses', () => {
    // Visit a sample page
    cy.visit('https://omayo.blogspot.com/');

    // Type text into an input field
    cy.get('#ta1').type('Cypress Example');

    // Press the Enter key
    cy.get('#ta1').type('{enter}');
    cy.get('#ta1').type('{enter}');
    cy.get('#ta1').type('{enter}');

    // // Press the Tab key
    // cy.get('#ta1').type('{tab}');

    // // Press the Escape key
    // cy.get('body').type('{esc}');

    // Press the Backspace key
    cy.get('body').type('{backspace}');

    // // Press the Delete key
    // cy.get('body').type('{del}');
  });
});
