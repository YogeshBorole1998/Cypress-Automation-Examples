const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

// Async function to set up Cypress events and configurations
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  // Requires the Cypress Mochawesome reporter plugin
  require('cypress-mochawesome-reporter/plugin')(on);

  // Register the preprocessor for processing feature files
  on("file:preprocessor", preprocessor(config));

  // Define a custom task for converting Excel to JSON
  on('task', {
    excelToJsonConvertor(filePath) {
      // Read Excel file and convert it to JSON
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync returns a Buffer
      });

      return result;
    }
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

// Cypress configuration object
module.exports = defineConfig({
  // Configuration for end-to-end tests
  e2e: {
    setupNodeEvents,
    // Specify the pattern for test files
    specPattern: 'cypress/e2e/Testers-Talk/*.js',
  },

  // Environment variables
  env: {
    // Define a base URL to be used across tests
    url: "https://rahulshettyacademy.com"
  },

  // Number of retries for failed tests in run mode
  retries: {
    runMode: 1
  },

  // Enable video recording for failed tests
  video: true,

  // Enable experimental Studio feature - record feature
  experimentalStudio: true,

  // Example: Uncomment the lines below to use Mochawesome reporter - html
  reporter: 'cypress-mochawesome-reporter',

  // Disabling Chrome Web Security to allow cross-origin requests in Cypress tests
  chromeWebSecurity: false,

  // Example: Uncomment the line below to set a specific projectId
  // This line demonstrates how to set a specific projectId for your Cypress tests
  // projectId: "zvre2e",

  // This line is an example of disabling file change or stack watching during test execution
  // watchForFileChanges: false
});
