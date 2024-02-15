describe.skip('Example to demonstrate API Mocking in Cypress', () => {

    beforeEach(() => {
        cy.intercept('GET', '**/tags', { fixture: 'tags.json' })
        cy.intercept('GET', '**/articles*', { fixture: 'articlefeed.json' })
        cy.visit('https://angular.realworld.io/')
    })

    it('TC020: Mock the Tags from the API Response and then validate on UI', () => {
        cy.get('.tag-list')
            .should('contain', 'cypress')
            .and('contain', 'selenium');
    });

    it('TC021: Mock the Article feed from the API Response and then validate on UI', () => {
        cy.get('app-favorite-button.pull-xs-right').contains('10');
        cy.get('.author').contains('testersdock');
        cy.get('.preview-link > p').contains('This is a test description');
    });
});
