import loginPage from '../Pages/loginPage'
import dashboardPage from '../Pages/dashboardPage'

const login = new loginPage();
const dashboard = new dashboardPage();

Cypress.Commands.add('logout', () => {
    dashboard.welcomeTxt().click()
    dashboard.logoutTxt().click()
    login.loginBtn().should('exist').should('be.visible');
})
