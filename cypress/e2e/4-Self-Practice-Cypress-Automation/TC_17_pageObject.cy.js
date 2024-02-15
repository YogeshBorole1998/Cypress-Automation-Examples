
describe('Validate Login and Logout on OrangeHRM website', function () {

    beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('TC030: Validate successful Login', function () {
        cy.login(this.testdata)
    })

    it('TC031: Validate successful Logout', function () {
        cy.login(this.testdata)
        cy.logout()
    })
})
