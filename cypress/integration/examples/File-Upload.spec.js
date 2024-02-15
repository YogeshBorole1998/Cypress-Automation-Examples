import 'cypress-file-upload';

describe('File Upload Processing Time', () => {
    it('TC104: Measures file upload processing time', () => {
        // Start measuring time
        const startTime = new Date().getTime();

        // Visit the HTML page with the file input
        cy.visit('./upload-file-demo.html');

        // Trigger file upload using cypress-file-upload
        cy.get('input[type="file"]').attachFile('46171542_2Years_Aniversary.pdf');

        // Wait for the progress bar to reach 100%
        cy.get('#progressBar').should('have.css', 'width', '285px');

        // End measuring time
        const endTime = new Date().getTime();

        // Calculate the processing time in milliseconds
        const processingTime = endTime - startTime;

        // Convert the processing time to seconds or minutes if needed
        const processingTimeInSeconds = processingTime / 1000;
        const processingTimeInMinutes = processingTimeInSeconds / 60;

        // Log the processing time
        cy.log(`File upload processing time: ${processingTime} milliseconds`);
        cy.log(`File upload processing time: ${processingTimeInSeconds} seconds`);
        cy.log(`File upload processing time: ${processingTimeInMinutes} minutes`);

        // Validate Success Message & Progress Status
        cy.get('#uploadSuccessMessage').should('be.visible').and('contain', 'File upload successful!');
        cy.get('#progressText').should('contain', 'Processing: 100%');
    });
});
