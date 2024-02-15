class loginPage {

    usernameInput() {
        return cy.get("[name='username']")
    }

    passwordInput() {
        return cy.get("[name='password']")
    }

    loginBtn() {
        return cy.get("[type='submit']")
    }
}
export default loginPage