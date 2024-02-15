
describe('Login to OrangeHRM website (E2E)', function () {
    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('TC003: Validate successful Login', function () {
        cy.get("[name='username']").type(this.testdata.username)
        cy.get("[name='password']").type(this.testdata.password)
        cy.get("[type='submit']").click()
        cy.url().should('include', 'dashboard')
        cy.get("div[class='oxd-layout-footer'] p:nth-child(1)").contains(this.testdata.versionInfo)
        cy.get('.oxd-userdropdown-name').should('have.text', this.testdata.welcomeText)
    })
})
