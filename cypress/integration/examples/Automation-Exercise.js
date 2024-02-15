/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Automation Practice Exercise Tests Suite', () => {

    it('Test Case 1: Register User', () => {
        // Visit the Home page
        cy.visit('http://automationexercise.com');

        // Verify that home page is visible successfully
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.text', ' Home');

        // Verify using text content
        cy.contains('Home').should('be.visible');

        // Verify using existence of key elements
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('exist');

        // Click on 'Signup / Login' button
        cy.get("a[href='/login']").click();

        // Verify 'New User Signup!' is visible
        cy.get("div[class='signup-form'] h2").should('have.text', 'New User Signup!').should('be.visible');

        // Enter name and email address
        cy.get("input[placeholder='Name']").type('Yogesh Borole');
        cy.get("input[data-qa='signup-email']").type('borole116@gmail.com');

        // Click 'Signup' button
        cy.get("button[data-qa='signup-button']").click();

        // Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.get(".title.text-center").first().should('have.text', 'Enter Account Information').should('be.visible');

        // Fill details: Title, Name, Email, Password, Date of birth
        cy.get('#id_gender1').click();
        cy.get('#password').type('Test@1998');

        const dateOfBirthSelectors = [
            { selector: '#days', value: '11' },
            { selector: '#months', value: 'June' },
            { selector: '#years', value: '1998' },
        ];

        // Selecting Date of Birth using forEach loop
        dateOfBirthSelectors.forEach(({ selector, value }) => {
            cy.get(selector).select(value);
        });

        // Select checkbox 'Sign up for our newsletter!'
        cy.get('#newsletter').check();

        // Select checkbox 'Receive special offers from our partners!'
        cy.get('#optin').check();

        // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.get('#first_name').type('Yogesh');
        cy.get('#last_name').type('Borole');
        cy.get('#company').type('NA');
        cy.get('#address1').type('Varun Park Housing Society');
        cy.get('#address2').type('Pimple-Saudagar');
        cy.get('#state').type('Maharashtra');
        cy.get('#city').type('Pune');
        cy.get('#zipcode').type('411027');
        cy.get('#mobile_number').type('7620510652');

        // Click 'Create Account button'
        cy.get("button[data-qa='create-account']").click();

        // Verify that 'ACCOUNT CREATED!' is visible
        cy.get("h2[class='title text-center'] b").should('have.text', 'Account Created!').should('be.visible');

        // Click 'Continue' button
        cy.get('.btn.btn-primary').click();

        // Verify that 'Logged in as username' is visible
        cy.get(':nth-child(10) > a').should('have.text', ' Logged in as Yogesh Borole').should('be.visible');

        // Click 'Delete Account' button
        cy.get("a[href='/delete_account']").click();

        // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.get("h2[class='title text-center'] b").should('have.text', 'Account Deleted!').should('be.visible');
        cy.get('.btn.btn-primary').click();
    });

    it('Test Case 2: Login User with correct email and password', () => {

        // Visit the Home page
        cy.visit('http://automationexercise.com');

        // Verify that home page is visible successfully
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.text', ' Home');

        // Verify using text content
        cy.contains('Home').should('be.visible');

        // Click on 'Signup / Login' button
        cy.get("a[href='/login']").click();

        // Verify 'Login to your account' is visible
        cy.get("div[class='login-form'] h2").should('have.text', 'Login to your account').should('be.visible');

        // Enter correct email address and password
        cy.get("input[data-qa='login-email']").type('velocloud678@gmail.com');
        cy.get("input[data-qa='login-password']").type('Test@1998');

        // Click 'login' button
        cy.get("button[data-qa='login-button']").click();

        // Verify that 'Logged in as username' is visible
        cy.get(':nth-child(10) > a').should('have.text', ' Logged in as Automation Test').should('be.visible');
    });

    it('Test Case 3: Login User with incorrect email and password', () => {

        // Visit the Home page
        cy.visit('http://automationexercise.com');

        // Verify that home page is visible successfully
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.text', ' Home');

        // Verify using text content
        cy.contains('Home').should('be.visible');

        // Click on 'Signup / Login' button
        cy.get("a[href='/login']").click();

        // Verify 'Login to your account' is visible
        cy.get("div[class='login-form'] h2").should('have.text', 'Login to your account').should('be.visible');

        // Enter incorrect email address and password
        cy.get("input[data-qa='login-email']").type('invalid-email@gmail.com');
        cy.get("input[data-qa='login-password']").type('invalid-pass');

        // Click 'login' button
        cy.get("button[data-qa='login-button']").click();

        // Verify error 'Your email or password is incorrect!' is visible
        cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!').should('be.visible')
    });

    it('Test Case 4: Logout User', () => {

        // Visit the Home page
        cy.visit('http://automationexercise.com');

        // Verify that home page is visible successfully
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.text', ' Home');

        // Verify using text content
        cy.contains('Home').should('be.visible');

        // Click on 'Signup / Login' button
        cy.get("a[href='/login']").click();

        // Verify 'Login to your account' is visible
        cy.get("div[class='login-form'] h2").should('have.text', 'Login to your account').should('be.visible');

        // Enter incorrect email address and password
        cy.get("input[data-qa='login-email']").type('velocloud678@gmail.com');
        cy.get("input[data-qa='login-password']").type('Test@1998');

        // Click 'login' button
        cy.get("button[data-qa='login-button']").click();

        //  Verify that 'Logged in as username' is visible
        cy.get(':nth-child(10) > a').should('have.text', ' Logged in as Automation Test').should('be.visible');

        // Click 'Logout' button
        cy.get("a[href='/logout']").click();

        // Verify that user is navigated to login page
        cy.url().should('include', 'login');
    });

    it('Test Case 5: Register User with existing email', () => {

        // Visit the Home page
        cy.visit('http://automationexercise.com');

        // Verify that home page is visible successfully
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.text', ' Home');

        // Verify using text content
        cy.contains('Home').should('be.visible');

        // Click on 'Signup / Login' button
        cy.get("a[href='/login']").click();

        // Verify 'New User Signup!' is visible
        cy.get("div[class='signup-form'] h2").should('have.text', 'New User Signup!').should('be.visible');

        // Enter name and already registered email address
        cy.get("input[placeholder='Name']").type('Test');
        cy.get("input[data-qa='signup-email']").type('velocloud678@gmail.com');

        // Click 'Signup' button
        cy.get("button[data-qa='signup-button']").click();

        // Verify error 'Email Address already exist!' is visible
        cy.get('.signup-form > form > p').should('have.text', 'Email Address already exist!');
    });

    it('Test Case 6: Contact Us Form', () => {

        // Visit the Home page
        cy.visit('http://automationexercise.com');

        // Verify that home page is visible successfully
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.text', ' Home');

        // Verify using text content
        cy.contains('Home').should('be.visible');

        // Click on 'Contact Us' button
        cy.get("a[href='/contact_us']").click();

        // Verify 'GET IN TOUCH' is visible
        cy.get("div[class='contact-form'] h2[class='title text-center']").should('have.text', 'Get In Touch').should('be.visible');

        // Enter name, email, subject and message
        cy.get("input[placeholder='Name']").type('Velocloud Test');
        cy.get("input[placeholder='Email']").type('velocloud678@gmail.com');
        cy.get("input[placeholder='Subject']").type('Cypress Automation Demo Test');
        cy.get('#message').type('Examples and Templates for Cypress automation testing.');

        // Upload file
        cy.get("input[name='upload_file']").attachFile('46171542_2Years_Aniversary.pdf');

        // Click 'Submit' button
        cy.get("input[value='Submit']").click();

        // Verify success message 'Success! Your details have been submitted successfully.' is visible
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');

        // Click 'Home' button and verify that landed to home page successfully
        cy.get("a[class='btn btn-success'] span").click();
        cy.get("img[alt='Website for automation practice']").should('be.visible');
    });

    it('Test Case 7: Verify Test Cases Page', () => {

        // Visit the Home page
        cy.visit('http://automationexercise.com');

        // Verify that home page is visible successfully
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.text', ' Home');

        // Verify using text content
        cy.contains('Home').should('be.visible');

        // Click on 'Test Cases' button
        cy.get("a[href='/test_cases']").first().click();

        // Verify user is navigated to test cases page successfully
        cy.url().should('include', 'test_cases');
        cy.get("div[class='panel-group'] h5 span").should('have.text', 'Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')
    });
});
