function taskConfirmation() {
  var view = {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Ticket Created :tada:",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "OK",
      emoji: true,
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Assigned Users (if any) have been notified. \n Message sent to selected channels.",
        },
      },
    ],
  };
  return view;
}

function taskNotification (data) {
  const deadline = new Date(data.deadline);
  var view = {
    "channel": data.assignee,
    "text": "New Task Coming Your Way!",
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `<@${data.owner}> assigned you a task.`
        }
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": `*${data.title}*`
          },
          {
            "type": "mrkdwn",
            "text": `*Due <!date^${deadline.getTime()/1000}^{date_short_pretty}|an error occured with deadline>*`
            
          }
        ],
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "View Details",
            "emoji": true
          },
          "value": `${data.taskID}`,
          "action_id": "actionId-0"
        }
      },
      {
        "type": "context",
        "elements": [
          {
            "type": "mrkdwn",
            "text": `*${data.description}*`
          }
        ]
      },
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "ACCEPT",
              "emoji": true
            },
            "style": "primary",
            "value": "click_me_123",
            "action_id": "actionId-1"
          }
        ]
      },
      {
        "type":"divider"
      }
    ]
  };
  
  return view
  
  
}

module.exports = {
  taskConfirmation,
  taskNotification
};
