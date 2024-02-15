/// <reference types="Cypress"/> 

describe('Data Driven Search Test Suite', function () {

    let testData;

    // Run before all tests to load test data
    before(() => {
        // Load test data from the fixture file asynchronously
        cy.fixture('product.json').then((jsonData) => {
            testData = jsonData;
        });
    });

    it('TC063: should perform a search using product names from data-driven values', function () {
        // Visit Google search page
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');

        // Clear the search textarea
        cy.get('textarea[name="q"]').clear();

        // Type product name from the test data and perform a search
        cy.get('textarea[name="q"]').type(testData.name);

        // Click the submit button (modify as needed, depending on your actual page)
        cy.get('button[type="submit"]').click();
    });
});
