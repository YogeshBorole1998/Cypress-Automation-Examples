// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Custom Cypress command to select a product by name
Cypress.Commands.add('selectProduct', (productName) => {
    // Iterate over each product title element on the page
    cy.get('h4.card-title').each((el, index, $list) => {
        // Check if the current product title includes the specified product name
        if (el.text().includes(productName)) {
            // Click the corresponding 'Add to Cart' button for the matched product
            cy.get('button.btn.btn-info').eq(index).click();
        }
    });
});


// Custom Cypress command to perform API login and store the token in environment variables
Cypress.Commands.add('loginAPI', () => {
    // Make a POST request to the login API endpoint with sample user credentials
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', {
        userEmail: "cypress@example.com",
        userPassword: "Test@1998"
    }).then(function (response) {
        // Validate that the API response status is 200
        expect(response.status).to.eq(200);

        // Store the token in the Cypress environment variables for later use
        Cypress.env('token', response.body.token);
    });
});

// Create a new post
Cypress.Commands.add('createPost', (payload) => {
    cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: payload,
    });
});

// Generic POST command
Cypress.Commands.add('POST', (baseURL, activities, payload) => {
    cy.request({
        method: 'POST',
        url: `${baseURL}/api/v1/${activities}`,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: payload
    });
});

// Generic DELETE command
Cypress.Commands.add('DELETE', (baseURL, activities, id) => {
    cy.request({
        method: 'DELETE',
        url: `${baseURL}/api/v1/${activities}/${id}`,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
    });
});

// Generic GET ALL command
Cypress.Commands.add('GETALL', (baseURL, activities) => {
    cy.request({
        method: 'GET',
        url: `${baseURL}/api/v1/${activities}`,
        failOnStatusCode: false,
        //Authtication if required
        // auth:
        // {
        //     username : userName,
        //     password: "password"
        // },
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
    });
});

// Generic GET BY ID command
Cypress.Commands.add('GETBYID', (baseURL, activities, id) => {
    cy.request({
        method: 'GET',
        url: `${baseURL}/api/v1/${activities}/${id}`,
        failOnStatusCode: false,
        //Authtication information can be specified here
        // auth:
        // {
        //     username : userName,
        //     password: "password"
        // },
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
    });
});

// Generic PUT command
Cypress.Commands.add('PUT', (baseURL, activities, id, payload) => {
    cy.request({
        method: 'PUT',
        url: `${baseURL}/api/v1/${activities}/${id}`,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: payload
    });
});
