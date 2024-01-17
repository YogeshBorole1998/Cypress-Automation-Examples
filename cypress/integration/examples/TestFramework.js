/// <reference types="Cypress"/> 

import HomePage from "./PageObjects/HomePage";
import ProductsPage from "./PageObjects/ProductsPage";

describe('Automation using Hooks', function () {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        });
    });

    it('Should fill out and verify the form with user data', function () {

        cy.visit(Cypress.env('url') + '/angularpractice/');

        homePage.getEditBox().type(this.data.name);
        homePage.getGenderDropdown().select(this.data.gender);

        // Verify Name and Text inside Two-way Binding input box is same
        homePage.getTwoWayDataBindingInput().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneurCheckbox().should('be.disabled');
        homePage.getShopTab().click();
        // cy.pause() // To Pause the code at this point

        // // Blackberry Phone is Added into the cart
        // cy.get('h4.card-title').each((el, index, $list) => {
        //     if (el.text().includes('Blackberry')) {
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })

        // // Building customized Cypress commands for reusing the code - Use this or above also fine to Add Blackberry Phone into the cart
        // cy.selectProduct('Blackberry')

        // To Select Multiple Phones use below scenario - Parameterizing the test Data from Json files using each command
        this.data.productName.forEach(function (element) {
            productsPage.selectProduct(element)
        })

        productsPage.checkoutBtn().click()
        let sum = 0;

        cy.get('tr td:nth-child(4) strong').each((value, index, $list) => {
            const actualAmount = value.text();
            let result = actualAmount.split(" ");

            result = result[1].trim();
            sum = Number(sum) + Number(result);
        }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function (element) {
            const amount = element.text();
            let res = amount.split(" ");

            let total = res[1].trim();
            expect(Number(total)).to.equal(sum);
        })

        cy.get("button[class='btn btn-success']").click()
        cy.get('#country').type('India')
        // Wait for suggestions to appear and select the first one
        cy.get('.suggestions > ul > li > a', { timeout: 10000 }).first().click();
        cy.get('#checkbox2').check({ force: true })
        cy.get("input[value='Purchase']").click()
        cy.get('.alert').should('be.visible');

        cy.get('.alert').then((element) => {
            const actualText = element.text();

            expect(actualText.includes('Success')).to.be.true
        })
    });
});
