const viewViews = require("./view_views.js");
const firebase = require("../../firebase.js");
const eventFunctions = require("../events/event_functions.js");

// called on hitting submit in create task modal
const createTask = async ({ ack, body, client, view, event }) => {
  
  try {
    await ack({
      response_action: 'update',
      view: viewViews.task_confirmation(),
    });
    
    //console.log(body);
    
    const workspace = body["team"]["id"]; 
    const channel = view["state"]["values"]["channel-block"]["channel-action"]["selected_channel"];
    const title = view["state"]["values"]["title-block"]["title-action"]["value"];
    var description = view["state"]["values"]["description-block"]["description-action"]["value"];
    var assignees = view["state"]["values"]["assigned-to-block"]["assigned-to-action"]["selected_users"];
    const deadlineDate = view["state"]["values"]["deadline-date-block"]["deadline-date-action"]["selected_date"];
    const deadlineTime = view["state"]["values"]["deadline-time-block"]["deadline-time-action"]["selected_time"];
    const priority = view["state"]["values"]["priority-block"]["priority-action"]["selected_option"]["value"];
    
    var deadline = new Date(deadlineDate + " " + deadlineTime);
    deadline = deadline.toISOString();
    
    const data = {
      "workspace":workspace, 
      "channel":channel, 
      "title":title, 
      "description":description, 
      "assignees":assignees, 
      "deadline":deadline, 
      "priority":priority
    };
    firebase.createTaskData(data);
    
    eventFunctions.refreshAppHome(client, body.user.id, body.team.id);
    
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createTask };