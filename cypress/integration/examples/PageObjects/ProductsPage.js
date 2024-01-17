class ProductsPage {
    selectProduct(productName) {
        cy.get('h4.card-title').each(($el, index, $list) => {
            if ($el.text().includes(productName)) {
                cy.get('button.btn.btn-info').eq(index).click();
            }
        });
    }

    checkoutBtn() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
}

export default ProductsPage;
