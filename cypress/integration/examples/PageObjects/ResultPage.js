class ResultPage {

    elements = {
        playList: () => cy.get("[title='API Testing by Testers Talk']")
    }

    goToPlayList() {
        this.elements.playList().click();
    }
}

module.exports = new ResultPage();

