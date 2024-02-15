import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get("[name='username']").type(username)
    cy.get("[name='password']").type(password)
})

And('User clicks on login button', () => {
    cy.get("[type='submit']").click()
})

Then('User is able to successfully login to the Website', () => {
    cy.get('.oxd-userdropdown-name').should('be.visible', { timeout: 10000 })
})
