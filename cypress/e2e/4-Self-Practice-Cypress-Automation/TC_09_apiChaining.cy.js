
describe('Example to demonstrate API Chaining in Cypress', function () {
    it('TC019: Chain two API requests and validate the response', () => {
        // Part 1: Make the first API request to get a user
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users',
            qs: {
                username: 'Bret', // You can choose any existing username
            },
        }).then((response) => {
            // Validate the first response
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array').and.have.length.gte(1);

            // Extract necessary information from the first response
            const userId = response.body[0].id;
            // const username = response.body[0].username;

            // Part 2: Make the second API request using data from the first response
            cy.request({
                method: 'GET',
                url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
            }).then((secondResponse) => {
                // Validate the second response
                expect(secondResponse.status).to.eq(200);
                expect(secondResponse.body).to.be.an('array').and.have.length.gte(1);

                // Additional assertions based on your specific requirements
                // For example, you can check if the posts belong to the correct user
                secondResponse.body.forEach((post) => {
                    expect(post.userId).to.eq(userId);
                    expect(post.title).to.be.a('string');
                    expect(post.body).to.be.a('string');
                });
            });
        });
    });
});
