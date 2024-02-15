/// <reference types="Cypress"/> 

describe('Cypress Actions Test Suite', function () {

    it('TC058: should demonstrate various actions on the Cypress Commands and Actions page', function () {

        // Step 1: Visit the Cypress Commands and Actions page
        cy.visit('https://example.cypress.io/commands/actions');

        // Step 2: Demonstrate using cy.select() on the dropdown with class 'form-control.action-select'
        // cy.get('.form-control.action-select').select(2); // Index
        // cy.get('.form-control.action-select').select('bananas'); // Visible Text
        cy.get('.form-control.action-select').select('fr-oranges'); // Value
    });

    it('TC059: should get all options from dropdown as text', () => {
        // Visit the page with the dropdown
        cy.visit('https://omayo.blogspot.com/');

        // Select the dropdown element
        const dropdown = cy.get('#drop1');
        const expectedOptions = ['Older Newsletters', 'doc 1', 'doc 2', 'doc 3', 'doc 4'];

        // Get all options from the dropdown and assert their text values
        dropdown.find('option').each((option) => {
            // Perform assertions based on the text values of the options
            const optionText = option.text().trim();

            // For example, assert that the option text is not empty
            expect(optionText).not.to.be.empty;
            // Assert that the option text is included in the expectedOptions array
            expect(expectedOptions.includes(optionText)).to.be.true;
        });
    });
});

