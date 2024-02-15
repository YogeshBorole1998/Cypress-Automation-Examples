/// <reference types="Cypress"/> 

describe('API Interaction Test Suite', function () {
    it('TC094: Logs in to Orange HRM Application using API', function () {

        cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
            body: {
                username: 'Admin',
                password: 'admin123'
            }
        }).then((response) => {
            // Add assertions based on your API response structure
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
            expect(response.isOkStatusCode).to.equal(true);
        });
    });
});

