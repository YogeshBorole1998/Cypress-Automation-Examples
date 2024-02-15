/// <reference types="Cypress"/> 

describe('Handling Web Controls UI', function () {
    it('TC115: Handling Checkboxes test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Handling Checkboxes
        // If you want to use multiple should then use and
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // All 3 elements-checbox will checked
        cy.get('input[type="checkBox"]').check()
        cy.get('input[type="checkBox"]').uncheck()

        // checbox 2 & 3 will checked
        cy.get('input[type="checkBox"]').check(['option2', 'option3'])
    });

    it('TC116: Handling Multiple Checkboxes test case', function () {
        cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo');

        // With force
        cy.get('[type="checkbox"]').as('checkboxes').check({ force: true });

        // Without force
        // cy.get('[type="checkbox"]: enabled').as('checkboxes').check();
    });
});


describe('Handling Web Controls UI', function () {
    it('TC117: Handling static and dynamic dropdown test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Handling static dropdown
        // select is the tagname for any static dropdown. and you can pass either value or option to select
        cy.get('select').select('option2').should('have.value', 'option2')
        cy.get('select').select('Option3').should('have.value', 'option3')

        // Handling dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                $el.click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

    });
});


describe('Handling Web Controls UI', function () {
    it('TC118: Handling Visible and invisible elements using Assertions', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // Handle Radio Button
        cy.get('[value="radio2"]').check().should('be.checked').and('have.value', 'radio2')
    });
});
