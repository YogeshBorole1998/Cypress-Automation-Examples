/// <reference types="Cypress"/> 

describe('Handling Web Controls UI', function () {
    it('TC106: Handling Alerts, Popups, Child Windows using Cypress-jQuery', function () {
        cy.visit('https://omayo.blogspot.com/');

        cy.get("div[id='HTML11'] textarea")
            .invoke('select')    // Select the text
            .trigger('copy');    // Trigger the copy event
    });
});
