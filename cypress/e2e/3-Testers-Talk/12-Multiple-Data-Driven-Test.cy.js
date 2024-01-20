/// <reference types="Cypress"/> 
const jsonData = require('../../fixtures/data_driven.json');

describe('Data Driven Search Test Suite - Multiple sets of Test Data', function () {

    // Iterate over each set of test data
    jsonData.forEach((data, index) => {
        // Use a dynamic test name based on the test data
        it(`should perform a search for "${data.name}" (Test Set ${index + 1})`, function () {
            // Visit Google search page
            cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');

            // Clear the search textarea
            cy.get('textarea[type="search"]').clear();

            // Type product name from the test data and perform a search
            if (data.name) {
                cy.get('textarea[type="search"]').type(data.name);
            } else {
                // Handle the case where data.name is undefined or empty
                cy.log('Skipping search for undefined or empty product name');
                // You might want to add an assertion or other handling based on your requirements
            }

            // Click the submit button (modify as needed, depending on your actual page)
            cy.get('button[type="submit"]').click();
        });
    });
});
