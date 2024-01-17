const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

// Async function to set up Cypress events and configurations
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

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
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js',
    // specPattern: 'cypress/integration/examples/BDD/*.feature'
  },

  env: {
    url: "https://rahulshettyacademy.com"
  },

  // projectId: "zvre2e",

  retries: {
    runMode: 1
  },

  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/results',
  //   overwrite: false,
  //   html: false,
  //   json: true,
  // },

  video: true,
});
