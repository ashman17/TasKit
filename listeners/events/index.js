const eventFunctions = require('./event_functions.js');

module.exports.register = (app) => {
  app.event('app_home_opened', eventFunctions.appHomeOpened);
};