// codecept.conf.js
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

exports.config = {
  tests: 'e2e/**/*.test.js',
  output: 'e2e/output',
  helpers: {
    Playwright: {
      url: 'http://localhost:9000',
      show: true,
      browser: 'chromium',
    },
  },
  include: {
    I: './steps_file.js', // Path to your steps_file
  },
  name: 'restaurant-apps',
};
