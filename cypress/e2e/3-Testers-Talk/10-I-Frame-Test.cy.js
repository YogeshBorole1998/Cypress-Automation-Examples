/// <reference types="Cypress"/> 
import 'cypress-iframe';

describe('Cypress iFrame Interaction Test Suite', function () {

    it('should interact with elements inside an iFrame on the Cypress Commands and Actions page', function () {

        // Step 1: Visit the Cypress Commands and Actions page containing an iFrame
        cy.visit('./i-frame-demo.html');

        // Step 2: Wait for the specified iFrame to load using its name
        cy.frameLoaded('[name="demo-frame"]'); // frame name
        // Alternatively, you can use frame id: cy.frameLoaded('#test-frame'); 

        // Step 3: Interact with elements inside the iFrame
        cy.iframe().contains('Downloads').click();
    });
});
