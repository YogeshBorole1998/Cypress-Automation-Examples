/// <reference types="Cypress"/> 

import HomePage from "../../integration/examples/PageObjects/HomePage";
import PlayListPage from '../../integration/examples/PageObjects/PlayListPage';
import ResultPage from '../../integration/examples/PageObjects/ResultPage';

// Explanation: 
// If you use `module.exports = new HomePage()` inside the class, then you can import it like this:
// `import homePage from "./PageObjects/HomePage";` and directly use it.
// But if you use `export default HomePage;` inside the class, then you need to import it like this:
// `import HomePage from "./PageObjects/HomePage";` and then create a const `homePage = new HomePage();` before using.

describe('Page Object Modal Test Suite', function () {
    // Create an instance of the HomePage class
    const homePage = new HomePage();

    it('should navigate to YouTube, search for API testing, go to the playlist, and verify its title', function () {
        // Step 1: Open YouTube
        homePage.visit();

        // Step 2: Search for API testing in YouTube
        homePage.searchInYoutube('api testing by testers');

        // Step 3: Navigate to the Playlist
        ResultPage.goToPlayList();

        // Step 4: Validate Playlist Title
        PlayListPage.elements.playListTitle().should('have.text', 'API Testing by Testers Talk');
    });
});
