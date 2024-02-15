import HomePage from "./PageObjects/HomePage";
import SearchResultsPage from './PageObjects/searchResultsPage'

const homePage = new HomePage();

describe('Google Market tests', () => {
    it('TC067: Positive: User is able to find product by name C57', () => {
        cy.fixture('product').then(productData => {
            homePage.open()
            cy.log('WHEN User clicks search icon')
            homePage.performSearch(productData.name)
            cy.log('THEN produce is presented withing found results')
            SearchResultsPage.getProductByDocId(productData.url).should('not.exist')
        })
    })
})
