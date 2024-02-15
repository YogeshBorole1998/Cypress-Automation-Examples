/// <reference types="Cypress"/> 

describe('Handling Web Controls UI', function () {
    it('Handling Alerts, Popups, Child Windows using Cypress-jQuery ', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Handling alert & Confirm Box
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // window:alert - Yields: the alert text (String)
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // window:confirm
        cy.get('#confirmbtn').click();
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    });
});


describe('Handling Child Windows', function () {
    it('Should handle child window', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
        })
    });
});


describe('Handling Web tables', function () {
    it('TC119: Should handle Web tables using each command', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes("Python")) {

                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    });
});


describe('Handling Mouse hover popups', function () {
    it('TC120: Should handle Mouse hover', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // // Using JQuery - open the popup then Click
        // cy.get('div.mouse-hover-content').invoke('show')
        // cy.contains('Top').click()

        // Using Force Click - without opening popup Just Click
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    });
});

