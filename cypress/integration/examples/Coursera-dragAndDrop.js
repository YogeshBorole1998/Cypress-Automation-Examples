/// <reference types="cypress" />

// Cypress test script for Drag and Drop operation within an IFrame

describe("IFrame and Drag and Drop operation", () => {
    beforeEach(() => {
        // Visit the target website with the draggable elements
        cy.visit("https://jqueryui.com/droppable/");
    });

    it("Drag and Drop with IFrame", () => {
        // Accessing the IFrame to interact with draggable and droppable elements
        cy.get(".demo-frame").then($frame => {
            // Finding the body within the IFrame
            const body = $frame.contents().find('body');

            // Alias the source and target elements for easier reference
            cy.wrap(body).find("#draggable").as("source");
            cy.wrap(body).find("#droppable").as("target");
        });

        // Triggering mouse events for drag and drop operation
        cy.get("@source").trigger("mousedown", { which: 1 });

        cy.get("@target")
            .trigger("mousemove", { which: 1 })
            .trigger("mouseup", { force: true }); // Using force to ensure the mouseup event is triggered

        // Verifying that the drop was successful by checking the target text
        cy.get("@target").should("contain.text", "Dropped!");
    });
});
