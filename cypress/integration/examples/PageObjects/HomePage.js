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
}

export default HomePage;
