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
  
  const [action,taskID] = body.actions[0].selected_option.value.split("-");
  
  if (action==="complete") {
    firebase.updateTaskData({
      teamID:body.user.team_id,
      taskID:taskID,
      status:"complete"
    });
  } 
  else if (action=="reminder") {
    var task = await firebase.readTaskData({
      teamID:body.user.team_id,
      taskID:taskID
    });
    console.log(task);
    
    var assignees = task.assignees;
    
    for (let assignee of assignees) {
      try {
        const result = await client.chat.postMessage({
          channel: assignee,
          text:"New task coming your way!",
          blocks: 
               [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>"
                  }
                },
                {
                  "type": "actions",
                  "elements": [
                    {
                      "type": "button",
                      "text": {
                        "type": "plain_text",
                        "text": "Click Me",
                        "emoji": true
                      },
                      "value": "click_me_123",
                      "action_id": "actionId-0"
                    }
                  ]
                }
              ]
        
        });
      }
      catch (error) {
        console.log(error);
      }
    }
  }
  
  eventFunctions.refreshAppHome(client, body.user.id, body.user.team_id);
}

module.exports = { 
  createTaskModal,
  taskActions
};