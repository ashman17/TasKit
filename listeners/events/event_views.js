const firebase = require("../../firebase.js");

async function openAppHome(teamID) {
  
  const tasks = await firebase.readTaskData({teamID:teamID});
  
  // adding the basic app home and the create task button
  var view  = {
    "type": "home",
    "blocks": [
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "＋ Create Task",
              "emoji": true
            },
            "style": "primary",
            "value": "create-button",
            "action_id": "create-task"
          }
        ]
      },
      {
        "type": "divider"
      }
    ]
  }
  
  if (tasks===null) {
    return view;
  }
  
  for (let [taskID, data] of Object.entries(tasks)) {
    
    var statusText = "";
    if (data.status == "open") {
      statusText = "`OPEN`";
    } else if (data.status == "accepted") {
      statusText = "`ACCEPTED`";
    } else {
      statusText = "`COMPLETED`";
    }
    
    var priorityText = "";
    if (data.priority == "critical") {
      priorityText += ":red_circle:";
    } else if (data.priority == "important") {
      priorityText += ":large_blue_circle:";
    } else if (data.priority == "normal") {
      priorityText += ":large_yellow_circle:";
    }
    
    // title with status and priority
    view.blocks.push({
			"type": "section",
      "fields": [
				{
					"type": "mrkdwn",
					"text": `${priorityText} *${data.title}*`
				},
        {
					"type": "mrkdwn",
					"text": `${statusText}`
				}
      ],
      "accessory": {
				"type": "overflow",
				"action_id": "task-actions",
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": ":white_check_mark: Mark Complete",
							"emoji": true
						},
						"value": `complete-${taskID}`
					},
					{
						"text": {
							"type": "plain_text",
							"text": ":page_with_curl: View details",
							"emoji": true
						},
						"value": `details-${taskID}`
					},
					{
						"text": {
							"type": "plain_text",
							"text": ":alarm_clock: Send reminder",
							"emoji": true
						},
						"value": `reminder-${taskID}`
					}
				]
			}
		});
    
    // description
    if (data.description) {
      view.blocks.push({
        "type": "context",
        "elements": [
          {
            "type": "mrkdwn",
            "text": `${data.description}`
          }
        ]
      });
    }
    
    var assigneeText = "";
    if (data.assignees) {
      assigneeText = "For "
      for (let assignee of data.assignees) {
        assigneeText += `<@${assignee}> `;
      }
    } else {
      assigneeText = "Be the first to accept!";
    }
    
    var deadlineText = "";
    if (data.deadline) {
      const deadline = new Date(data.deadline)
      deadlineText = ` Due <!date^${deadline.getTime()/1000}^{date_short_pretty} |an error occured with date>`;
    }
    
    
    // task data
    view.blocks.push({
      "type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": assigneeText
				},
        {
					"type": "mrkdwn",
					"text": deadlineText
				}
			]
    });
    
    // taskID
    view.blocks.push({
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": `Ticket ID #${taskID} `
				}
			]
    });
    
    // divider
    view.blocks.push({
      "type": "divider"
    });
  }
  
  return view;
}

module.exports = {
  openAppHome
};