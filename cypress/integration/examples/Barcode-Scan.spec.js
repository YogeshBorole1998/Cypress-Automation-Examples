/// <reference types="Cypress"/> 

import { Decoder } from '@nuintun/qrcode';
const qrcode = new Decoder();

// Cypress test suite for QR and Barcode Scanning
describe('QR Code Scanning Test Suite', () => {
    // Cypress test case to verify if QR code can be read
    it('TC095: Can Read QR Code', () => {
        // Visit the HTML page with QR Code and Barcode images
        cy.visit('./QR-Barcode-demo.html');

        // Get the QR Code image element
        cy.get('img').then(image => {
            // Extract the source URL of the image
            const src = image.prop('src');

            // Use the qrcode library to scan the QR Code from the image
            qrcode.scan(src).then(result => {
                // Log the decoded data (optional)
                console.log('Decoded QR Code: ' + result.data);

                // Assert that the decoded data matches the expected value
                expect(result.data).to.equal('https://capgemini.com');
            });
        });
    });
});

