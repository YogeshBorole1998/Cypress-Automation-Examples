

// Describe block to group related tests
describe('Test to demonstrate Test Retries in Cypress', () => {

    // Before hook to run setup code before any tests
    before(() => {
        // Visit Wikipedia website before running any test
        cy.visit('https://wikipedia.org')
    })

    // Test case to validate page title
    it('Validate Page Title', () => {
        // Intentionally making the assertion fail to demonstrate retries
        cy.title().should('eq', 'Wikipedia1111')
    })
})
