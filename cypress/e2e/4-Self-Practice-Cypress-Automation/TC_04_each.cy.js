
describe('Example to demonstrate the use each in Cypress', function () {
    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('TC008: Validate successful Login', function () {
        cy.get("[name='username']").type(this.testdata.username)
        cy.get("[name='password']").type(this.testdata.password)
        cy.get("[type='submit']").click()
        cy.url().should('include', 'dashboard')
        cy.get("div[class='oxd-layout-footer'] p:nth-child(1)").contains(this.testdata.versionInfo)
        cy.get('.oxd-userdropdown-name').should('have.text', this.testdata.welcomeText)
    })

    it.skip('TC009: Validate all the Quick Launch Texts', function () {
        cy.get('.quickLaunge').each(($el, index) => {
            expect($el).to.contain(this.testdata.quickLaunch[index])
        })
    })

    /*Please check the pie chart percentage values before execution.
    I realized it very late that the pie chart values changes after few days.
    Update the empDistPieChart from the testdata.json file with the latest values.*/

    it.skip('TC010: Validate the Employee Distribution by Subunit Piechart Values and sum of percentage values', function () {
        var total = 0
        cy.get('.emp-distrib-chart').each(($el, index) => {
            expect($el).to.contain(this.testdata.empDistPieChart[index])
            total = total + parseInt($el.text())
        }).then(() => {
            expect(total).to.equal(99)
        })
    })
})