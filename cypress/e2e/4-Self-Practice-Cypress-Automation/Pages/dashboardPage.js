class dashboardPage {

    versionTxt() {
        return cy.get("div[class='oxd-layout-footer'] p:nth-child(1)")
    }

    welcomeTxt() {
        return cy.get('.oxd-userdropdown-name')
    }

    logoutTxt() {
        return cy.contains('Logout')
    }
}

export default dashboardPage