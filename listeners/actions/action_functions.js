const actionViews = require("./action_views.js");
const firebase = require("../../firebase.js");
const eventFunctions = require("../events/event_functions.js")

// opens the create task modal
const createTaskModal = async ({ ack, body, client }) => {
  await ack();
  
  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: actionViews.createTaskModal()
    });
    
  }
  catch (error) {
    console.log(error);
  }
}

// acts on task actions
const taskActions = async ({ack, body, payload, client}) => {
  await ack();
  
  //console.log(value);
  const [action,taskID] = body.actions[0].selected_option.value.split("-");
  // console.log(action);
  // console.log(taskID);
  console.log(body);
  
  if (action==="complete") {
    firebase.updateTaskData({
      teamID:body.user.team_id,
      taskID:taskID,
      status:"complete"
    });
  }
  
  eventFunctions.refreshAppHome(client, body.user.id, body.user.team_id);
}

module.exports = { 
  createTaskModal,
  taskActions
};