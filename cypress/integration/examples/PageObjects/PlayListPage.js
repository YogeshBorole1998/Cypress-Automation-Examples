class PlayListPage {
    elements = {
        playListTitle: () => cy.get('#header-description > h3 > yt-formatted-string > a')
    }

    goToPlayList() {
        this.elements.playList().click();
    }
}

module.exports = new PlayListPage();
