/// <reference types="cypress" />

describe("Amazon Project", () => {

    beforeEach(() => {
        // Visit the Amazon website before each test
        cy.visit("https://amazon.in")
    })

    it("Search Product", () => {
        // Select the 'Electronics' category from the dropdown
        cy.get("#searchDropdownBox").select("Electronics", { force: true })

        // Type "Apple Watch" into the search box
        cy.get("#twotabsearchtextbox").type("Apple Watch")

        // Click the search button
        cy.get("#nav-search-submit-button").click()

        // Alias the search results for easier reference
        cy.get('[data-component-type="s-search-result"]').as("products")

        // Log the text of the 6th product in the list
        cy.get("@products").eq(5).invoke('text').then(productText => {
            cy.log(productText)
        })

        // Perform an action for each product in the list
        cy.get('@products').each(($el, index, $list) => {
            // Scroll each product into view
            cy.wrap($el).scrollIntoView()

            // Log information about each product
            cy.log(
                "Index: " + index + " and the product is " + $el.text()
            )
        })
    })
})
