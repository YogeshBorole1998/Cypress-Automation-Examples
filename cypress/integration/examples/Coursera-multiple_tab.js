/// <reference types="cypress" />

describe("Multiple Window Handle", () => {

    beforeEach(() => {
        // Visit the test page with multiple window handling
        cy.visit("https://test.qatechhub.com/window-handling/")
    })

    it("TC#1 - Verify href and target attributes", () => {
        // Alias the "Click Here" button for easier reference
        cy.contains("a", "Click Here").as('button')

        // Check if the button has the expected 'href' attribute
        cy.get("@button").should("have.attr", "href").and("equal", "https://qatechhub.com")

        // Check if the button has the expected 'target' attribute
        cy.get("@button").should("have.attr", "target").and("equal", "_blank")
    })

    it("Navigate to the target page by removing the 'target' attribute", () => {
        // Alias the "Click Here" button for easier reference
        cy.contains("a", "Click Here").as('button')

        // Remove the 'target' attribute and click the button to open in the same window
        cy.get("@button").invoke('removeAttr', "target").click()
    })
})
