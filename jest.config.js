require('dotenv').config({ path: '.env' });

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: "jsdom",
}
