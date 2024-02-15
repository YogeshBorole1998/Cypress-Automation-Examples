///<reference types = 'cypress'/>

describe('POST API Test', () => {
    it('TC088: Create Activity', () => {

        cy.fixture('activity.json').as('inputRequest')
        cy.POST('https://fakerestapi.azurewebsites.net', "Activities").then((response => {
            expect(response.status).to.equal(400)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log(JSON.stringify(response.body))
        }))
    });

    it('TC089: Create Activity failed', () => {

        cy.fixture('activity.json').as('inputRequest')
        cy.POST('https://fakerestapi.azurewebsites.net', "Activities").then((response => {
            expect(response.status).to.equal(400)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log(JSON.stringify(response.body))
        }))
    });
});
