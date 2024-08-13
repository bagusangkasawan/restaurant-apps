// steps_file.js
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

module.exports = function () {
  return actor({
    // Define custom steps here
    // For example:
    // I.login = async function () {
    //   ...
    // }
  });
};
