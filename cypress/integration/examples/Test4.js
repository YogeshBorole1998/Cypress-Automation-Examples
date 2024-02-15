import 'cypress-iframe';

/// <reference types="Cypress"/> 
/// <reference types="Cypress-iframe"/> 

describe('Handling Frames in Cypress', function () {
    it('TC121: Validate that user should be able to write a text inside the available area', () => {

        cy.visit('https://the-internet.herokuapp.com/tinymce');
        cy.get('#mce_0_ifr').then(function ($iframe) {
            let iframebody = $iframe.contents().find('body')

            cy.wrap(iframebody)
                .clear()
                .type("Welcome Yogesh..!!")
                .type('{selectall}')
            cy.get('[aria-label="Bold"] > .tox-icon > svg').click()
        })
    })

    it('TC122: iFrame Test Suite', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('li.dropdown').eq(1).invoke('show')
        cy.iframe().contains('Part time jobs').click({ force: true })
        cy.wait(2000)
        cy.iframe().find('select[name="select-jpb-type"]').select('Freelancing')
    })
});
