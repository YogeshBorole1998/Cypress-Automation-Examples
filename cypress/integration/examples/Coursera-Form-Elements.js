/// <reference types="cypress" />

describe("Form Elements", function () {

    beforeEach(() => {
        // Visit the test page and load form elements data from fixture
        cy.visit("https://test.qatechhub.com/form-elements/")

        // Load form data from fixture for reuse
        cy.fixture("form_elements").then(function (formData) {
            // Assign form data to a global variable for accessibility across the test
            globalThis.formData = formData
        })
    })

    it("Form Element Test", () => {
        // Fill in the first name
        cy.get("#wpforms-49-field_1").type(formData.firstName)

        // Fill in the last name
        cy.get(".wpforms-field-name-last.wpforms-field-required").type(formData.lastName)

        // Fill in the email
        cy.get("input[type='email']").type(formData.email)

        // Fill in the phone number
        cy.get("#wpforms-49-field_4").type(formData.phoneNumber)

        // Select the 'Female' radio button
        cy.get("input[value='Female']").check()

        // Select 'Cypress' from the dropdown
        cy.get("#wpforms-49-field_5").select("Cypress")

        // Click the 'Submit' button
        cy.contains("button", "Submit").click()

        // Confirm successful form submission message
        cy.get("#wpforms-confirmation-49 p").first().should("contain.text", "You have successfully filled in the form!")
    })
})
