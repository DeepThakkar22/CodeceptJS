/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://etalente.co.za',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'CodeceptJS'
}