function app_home() {
  return {
    "type": "home",
    "blocks": [
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "Welcome to TasKit",
          "emoji": true
        }
      },
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
            "value": "click_me_123",
            "action_id": "create-task"
          }
        ]
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*Fix the Loading Bugs*"
        }
      },
      {
        "type": "context",
        "elements": [
          {
            "type": "plain_text",
            "text": "Ticket ID #A4Z65",
            "emoji": true
          }
        ]
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": "Owner: `Robert Hendrick`"
          },
          {
            "type": "mrkdwn",
            "text": "Assigned To: `James Bond` `Alec Trevelyan`"
          },
          {
            "type": "mrkdwn",
            "text": "Status: :large_yellow_circle: `Open`"
          },
          {
            "type": "mrkdwn",
            "text": "Deadline: `17/09/2022`"
          }
        ]
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*Push Code to Production*"
        }
      },
      {
        "type": "context",
        "elements": [
          {
            "type": "plain_text",
            "text": "Ticket ID #7Z34G",
            "emoji": true
          }
        ]
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": "Owner: `Rajiv Gupta`"
          },
          {
            "type": "mrkdwn",
            "text": "Assigned To: `Ashman Mehra` `Aditya Sharma`"
          },
          {
            "type": "mrkdwn",
            "text": "Status: :large_blue_circle: `Accepted`"
          },
          {
            "type": "mrkdwn",
            "text": "Deadline: `29/10/2022`"
          }
        ]
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*Add the Extra Edit Feature*"
        }
      },
      {
        "type": "context",
        "elements": [
          {
            "type": "plain_text",
            "text": "Ticket ID #8P03R",
            "emoji": true
          }
        ]
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": "Owner: `John Doe`"
          },
          {
            "type": "mrkdwn",
            "text": "Assigned To: `Anna Fredrick`"
          },
          {
            "type": "mrkdwn",
            "text": "Status: :large_green_circle: `Completed`"
          },
          {
            "type": "mrkdwn",
            "text": "Deadline: `6/11/2022`"
          }
        ]
      },
      {
        "type": "divider"
      }
    ]
  };
}

module.exports = {
  app_home
};