/// <reference types="Cypress"/> 

describe('My First Test Suite', function () {
    it('TC111: My first test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        // Selenium get hit URL in Browser. but In Cypress get act like findElement of selenium.
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)

        // parent-child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        // Capsicum is Added to Cart
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        // Iterate over an array of DOM elements - Grabbing the text for validations using cypress text command
        // In latest version of Cypress Click method has been deprecated not totally but with find method click is not allowed.
        // e.g. $el.find('button[type="button"]').click() --> Not Allowed

        cy.get('.products').find('.product').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            const textVeg = $el.find('h4.product-name').text()

            if (textVeg.includes('Cashews')) {
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })

        // Cypress Asynchronous nature and its promise handling 

        // ➡️ Cypress is internally taking care of Promise. If you divided code in 2 lines, then cypress will confuse & throw error.
        // const logo = cy.get('.brand')
        // cy.log(logo.text()) // => Error: logo.text is not a function

        // ➡️ Not work - Because of Parent-Child Chaining
        // cy.log(cy.get('.brand').text()) // Not work

        // ➡️ In these cases we have to manually handle the Promise. - This is to print in logs
        cy.get('.brand').then(function (logoElement) {
            cy.log(logoElement.text())
        })

        // Assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
    });
});


describe('My First Duplicate Test Suite in different way', () => {
    it('TC112: My first duplicate test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        // Selenium get hit URL in Browser. but In Cypress get act like findElement of selenium.
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4);
    });
});


describe('Handing Async promises with Cypress', function () {
    it('TC113: Adding products to cart with aliasing', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)

        // Aliasing the products locator for reusability
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

        // Manually we are resolving promise to print 'Learning Cypress' throgh console.log in sequence
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {
            console.log('Learning Cypress')
        })

        // Iterating over products and adding Cashews to Cart
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()

            if (textVeg.includes('Cashews')) {
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })
    });
});


describe('Practise test with all necessary validations', () => {
    it('TC114: My first assignment test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        // Type 'ca' in the search box
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        // Add Capsicum to Cart
        cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()

        // Click on the Cart icon
        cy.get('[alt=Cart]').click()

        // Click on the "PROCEED TO CHECKOUT" button in the cart preview
        cy.get("div[class='cart-preview active'] button[type='button']").click()

        // Click on the "Place Order" button
        cy.contains('Place Order').click()

        // Check Proceed button is available
        cy.get('button').should('exist');

        // Alternatively, check Proceed button is visible
        cy.get('button').should('be.visible');
    });
});
