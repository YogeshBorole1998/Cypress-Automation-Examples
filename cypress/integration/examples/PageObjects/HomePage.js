class HomePage {
    getEditBox() {
        return cy.get("[name='name']:nth-child(2)");
    }

    getGenderDropdown() {
        return cy.get("select");
    }

    getTwoWayDataBindingInput() {
        return cy.get("[name='name']:nth-child(1)");
    }

    getEntrepreneurCheckbox() {
        return cy.get("#inlineRadio3");
    }

    getShopTab() {
        return cy.get("a[href*='shop']");
    }

    open() {
        cy.visit('https://www.iherb.com');
    }

    get searchInput() {
        return cy.get('#txtSearch');
    }

    performSearch(productToSearch) {
        this.searchInput.type(`${productToSearch}{enter}`);
    }

    // Refer for 13-Page-Object-Test.cy.js File :

    elements = {
        // Function that returns the search text box element
        searchTextBox: () => cy.get("[name='search_query']"),

        // Function that returns the search button element
        searchButton: () => cy.get('#search-icon-legacy')
    }

    visit() {
        cy.visit('https://www.youtube.com/');
    }

    searchInYoutube(searchContent) {
        // Invoke the function to get the Cypress object and then call type() on it
        this.elements.searchTextBox().type(searchContent);
        this.elements.searchButton().click();
    }
}

export default HomePage;
