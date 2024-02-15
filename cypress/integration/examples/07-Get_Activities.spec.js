///<reference types = 'cypress'/>

describe('GET API Test', () => {
    it('TC091: Get All Activity Details', () => {
        cy.GETALL('https://fakerestapi.azurewebsites.net', "Activities").then((response => {
            expect(response.status, 200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log(JSON.stringify(response.body))
        }))
    });

    it('TC092: Get Activity Details By ID', () => {
        cy.GETBYID('https://fakerestapi.azurewebsites.net', "Activities", 2).then((response => {
            expect(response.status, 200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log(JSON.stringify(response.body))
        }))
    });
});
