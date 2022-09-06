const messageFunctions = require('./message_functions.js');

module.exports.register = (app) => {
  app.message("hello", messageFunctions.greet);
};