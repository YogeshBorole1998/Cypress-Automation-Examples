/// <reference types="Cypress"/> 

describe('Google Search Interaction - API Testing Test Suite', function () {

    it('TC057: should interact with elements on the Google Search page', function () {

        // Step 1: Visit Google search page
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');

        // Step 2: Clear the search input using XPath
        cy.xpath('//*[@name="q"]').first().clear();

        // Step 3: Type 'api testing by testers talk' into the search input using XPath
        cy.xpath('//*[@name="q"]').first().type('api testing by testers talk');

        // Step 4: Click on the 'Search' button using XPath
        cy.xpath("//span[@class='z1asCe MZy1Rb']//*[name()='svg']").click();

        // Step 5: Click on the 'Youtube' link using XPath
        cy.xpath("//h3[normalize-space()='Testers Talk']").click();
    });
});



