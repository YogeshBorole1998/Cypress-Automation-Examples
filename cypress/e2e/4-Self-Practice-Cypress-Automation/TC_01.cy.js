
describe('Search for Google Wiki page from Wikipedia website (Smoke)', () => {
    beforeEach(() => {
        cy.visit('https://wikipedia.org')
    })

    it('TC001: Validate Page Title', () => {
        cy.title().should('eq', 'Wikipedia')
    })

    it('TC002: Search for Google Wiki Page and Validate Google Wiki Page has opened', () => {
        cy.get('#searchInput').type('google')
        cy.get('button[type="submit"]').click()
        cy.get('h1#firstHeading').contains('Google')
        cy.title().should('eq', 'Google - Wikipedia')
    })
})

