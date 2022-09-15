const actionFunctions = require('./action_functions.js');

module.exports.register = (app) => {
  app.action('create-task', actionFunctions.createTaskModal);
  app.action('task-actions', actionFunctions.taskActions);
};