/// <reference types="Cypress" />
import HomePage from '../../PageObjects/HomePage'
import ProductPage from '../../PageObjects/ProductsPage'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// npx cypress run --spec cypress/integration/examples/BDD/*.feature --headed --browser chrome --env url="https://google.com"
const homePage = new HomePage();
const productPage = new ProductPage();
let name;


Given('I open ECommerce Page', () => {
    cy.visit(Cypress.env('url') + "/angularpractice/");
})

// When I add items to Cart
When('I add items to Cart', function () {
    homePage.getShopTab().click();

    this.data.productName.forEach(function (element) {
        productPage.selectProduct(element)
    })

    productPage.checkoutBtn().click()
})

//And Validate the total prices
When('Validate the total prices', () => {
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
})

//Then select the country submit and verify Thankyou
Then('select the country submit and verify Thankyou', () => {
    cy.get("button[class='btn btn-success']").click();
    cy.get('#country').type('India');
    // Wait for suggestions to appear and select the first one
    cy.get('.suggestions > ul > li > a', { timeout: 10000 }).first().click();
    cy.get('#checkbox2').check({ force: true });
    cy.get("input[value='Purchase']").click();
    cy.get('.alert').should('be.visible');

    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then((element) => {
        const actualText = element.text();

        expect(actualText.includes('Success')).to.be.true
    })
})

//When I fill the form details
When('I fill the form details', function (dataTable) {

    // [bobz , male   ]
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGenderDropdown().select(dataTable.rawTable[1][1])
})

// Then validate the forms behaviour
Then('validate the forms behaviour', function () {
    homePage.getTwoWayDataBindingInput().should('have.value', this.data.name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepreneurCheckbox().should('be.disabled');

})

// And select the Shop Page
Then('select the Shop Page', () => {
    homePage.getShopTab().click();
})
