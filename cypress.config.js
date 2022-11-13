const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3003",
    supportFile: "tests/cypress/support/e2e.js",
    specPattern: "tests/cypress/e2e/**/*",
    downloadsFolder: 'tests/cypress/downloads',
    trashAssetsBeforeRuns: true,
    fixturesFolder: "tests/cypress/fixtures",
    screenshotsFolder: "tests/cypress/screenshots",
    videosFolder: "tests/cypress/videos",
  }
});
