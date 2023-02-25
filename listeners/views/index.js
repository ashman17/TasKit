const viewFunctions = require('./view_functions.js');

module.exports.register = (app) => {
  app.view('create-task-submit', viewFunctions.createTask);
};