/// <reference types="cypress" />

describe('Cypress Test Hooks and Test Cases Suite', function () {

    before(function () {
        // Runs once before all tests in the 'it' and 'specify' blocks
        cy.log("Before all tests: I am in before")
    })

    after(function () {
        // Runs once after all tests in the 'it' and 'specify' blocks
        cy.log("After all tests: I am in after")
    })

    beforeEach(function () {
        // Runs before each test in the 'it' and 'specify' blocks
        cy.log("Before each test: I am in beforeEach")
    })

    afterEach(function () {
        // Runs after each test in the 'it' and 'specify' blocks
        cy.log("After each test: I am in afterEach")
    })

    it('should execute Cypress Test Case 1', function () {
        // Test Steps/Commands for Test Case 1
        cy.log("Test Case 1: I am in Test Case 1 ")
    })

    it('should execute Cypress Test Case 2', function () {
        // Test Steps/Commands for Test Case 2
        cy.log("Test Case 2: I am in Test Case 2")
    })

    specify('should execute Cypress Specify Case 1', function () {
        // Test Steps/Commands for Specify Case 1
        cy.log("Specify Case 1: I am in Specify Case 1")
    })

    specify('should execute Cypress Specify Case 2', function () {
        // Test Steps/Commands for Specify Case 2
        cy.log("Specify Case 2: I am in Specify Case 2")
    })
})
