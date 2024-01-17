
describe('API Tests', () => {
    it('should make a GET request', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('userId');
                expect(response.body).to.have.property('id');
                expect(response.body).to.have.property('title');
                expect(response.body).to.have.property('body');
            });
    });

    it('should make a POST request', () => {
        const payload = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };

        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', payload)
            .should((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('id');
                expect(response.body.title).to.eq('foo');
                expect(response.body.body).to.eq('bar');
                expect(response.body.userId).to.eq(1);
            });
    });

    it('should make chained requests', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
            .then((response1) => {
                cy.request(`https://jsonplaceholder.typicode.com/comments?postId=${response1.body.id}`)
                    .should((response2) => {
                        expect(response2.status).to.eq(200);
                        expect(response2.body).to.be.an('array');
                        expect(response2.body).to.have.length.gt(0);
                    });
            });
    });

    it('should validate response headers', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.headers).to.include({
                    'content-type': 'application/json; charset=utf-8',
                });
            });
    });

    it('should use fixtures for request payload', () => {
        cy.fixture('postPayload.json').then((payload) => {
            cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', payload)
                .should((response) => {
                    expect(response.status).to.eq(201);
                    expect(response.body).to.have.property('id');
                });
        });
    });

    it('should make a GET request with query parameters', () => {
        const postId = 1;

        cy.request(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('userId');
                expect(response.body).to.have.property('id', postId);
            });
    });

    it('should make a DELETE request', () => {
        const postIdToDelete = 1;

        cy.request('DELETE', `https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`)
            .should((response) => {
                expect(response.status).to.eq(200);
            });
    });

    it('should make a PUT request with request payload', () => {
        const postIdToUpdate = 1;
        const updatedPayload = {
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1,
        };

        cy.request('PUT', `https://jsonplaceholder.typicode.com/posts/${postIdToUpdate}`, updatedPayload)
            .should((response) => {
                expect(response.status).to.eq(200);
                // Add more assertions as needed
            });
    });

    it('should validate response time', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.duration).to.be.lessThan(1000); // Response time in milliseconds
            });
    });

    it('should chain requests and perform assertions', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
            .then((response1) => {
                expect(response1.status).to.eq(200);
                expect(response1.body).to.have.property('userId');

                return cy.request(`https://jsonplaceholder.typicode.com/comments?postId=${response1.body.id}`);
            })
            .should((response2) => {
                expect(response2.status).to.eq(200);
                expect(response2.body).to.be.an('array');
                expect(response2.body).to.have.length.gt(0);
            });
    });

    it('should use custom command to create a post', () => {
        const postPayload = {
            title: 'Custom Command Post',
            body: 'Creating a post using a custom command.',
            userId: 1,
        };

        cy.createPost(postPayload);
    });

    it('should retry a request and handle timeouts', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            retryOnStatusCodeFailure: true,
            retries: 3,
            timeout: 10000, // 10 seconds
        }).should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    const testData = [
        { title: 'Test Title 1', body: 'Test Body 1', userId: 1 },
        { title: 'Test Title 2', body: 'Test Body 2', userId: 2 },
    ];

    testData.forEach((data, index) => {
        it(`should create a post - Test Case ${index + 1}`, () => {
            cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: data,
            }).should((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('id');
            });
        });
    });

    it('should make a GET request using environment variable', () => {
        const apiUrl = Cypress.env('API_URL') || 'https://jsonplaceholder.typicode.com';

        cy.request(`${apiUrl}/posts/1`)
            .should((response) => {
                expect(response.status).to.eq(200);
            });
    });

    it('should test paginated data', () => {
        const pageSize = 10;

        cy.request('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.length.of.at.most(pageSize);
            });
    });
});
