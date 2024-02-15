///<reference types = 'cypress'/>

describe('PUT API Tests', () => {
    it('TC093: Update Activity', () => {

        cy.fixture('updateactivity.json').as('inputRequest')
        cy.PUT('https://fakerestapi.azurewebsites.net', "Activities", 13).then((response => {
            expect(response.status, 200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log(JSON.stringify(response.body))
        }))
    });
});