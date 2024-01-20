/// <reference types="Cypress"/> 

describe('Record and Play Test Suite', function () {

    /* ==== Test Created with Cypress Studio ==== */
    it('record and play test case', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
        cy.get('.oxd-userdropdown-tab').click();
        cy.get(':nth-child(1) > .oxd-userdropdown-link').click();
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-text').should('have.text', 'OrangeHRM');
        cy.get('.oxd-grid-2 > :nth-child(4) > .oxd-text').should('have.text', 'OrangeHRM OS 5.5');
        /* ==== End Cypress Studio ==== */
    });
});

