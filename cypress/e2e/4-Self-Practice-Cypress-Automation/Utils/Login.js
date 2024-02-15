import loginPage from '../Pages/loginPage'
import dashboardPage from '../Pages/dashboardPage'

const login = new loginPage();
const dashboard = new dashboardPage();
const OrangeHRMURL = 'https://opensource-demo.orangehrmlive.com/';

Cypress.Commands.add('login', (data) => {
    cy.visit(OrangeHRMURL)
    login.usernameInput().type(data.username)
    login.passwordInput().type(data.password)
    login.loginBtn().click()
    dashboard.versionTxt().contains(data.versionInfo)
    dashboard.welcomeTxt().should('have.text', data.welcomeText)
})
