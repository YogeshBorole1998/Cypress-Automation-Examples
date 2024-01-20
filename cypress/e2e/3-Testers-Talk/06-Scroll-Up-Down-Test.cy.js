/// <reference types="Cypress"/> 
import 'cypress-iframe';

describe('YouTube Video Interaction Test Suite', function () {

    it('should interact with elements on the YouTube video page', function () {

        // Step 1: Visit the YouTube video page with an iFrame
        cy.visit('https://www.youtube.com/watch?v=X46I88W6uIE&list=PLUeDIlio4THFLrS29tJnP9yz-QKhn4mdB');

        // Step 2: Wait for 5 seconds (adjust as needed)
        cy.wait(5000);

        // Step 3: Scroll down to find and click on the video with title 'JavaScript #31 Inheritance with Examples'
        cy.contains('JavaScript #31 Inheritance with Examples')
            .scrollIntoView().should('be.visible').click();

        // Step 4: Scroll back up to the top of the page
        cy.scrollTo('top');
    });
});
