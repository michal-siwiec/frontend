const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: "tests/cypress/support/e2e.js",
    specPattern: "tests/cypress/e2e/**/*",
    downloadsFolder: 'tests/system/downloads',
    fixturesFolder: "tests/cypress/fixtures",
    screenshotsFolder: "tests/cypress/screenshots",
    videosFolder: "tests/cypress/videos"
  }
});
