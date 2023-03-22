const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'qs946u',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
