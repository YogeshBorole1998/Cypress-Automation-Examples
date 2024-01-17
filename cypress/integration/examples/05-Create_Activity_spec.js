///<reference types = 'cypress'/>

describe('POST API Test', () => {
    it('Create Activity', () => {

        cy.fixture('activity.json').as('inputRequest')
        cy.POST('https://fakerestapi.azurewebsites.net', "Activities").then((response => {
            expect(response.status).to.equal(200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log(JSON.stringify(response.body))
        }))
    });

    it('Create Activity failed', () => {

        cy.fixture('activity.json').as('inputRequest')
        cy.POST('https://fakerestapi.azurewebsites.net', "Activities").then((response => {
            expect(response.status).to.equal(200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log(JSON.stringify(response.body))
        }))
    });
});
