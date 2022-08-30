function app_home() {
  var view = {
    type: "home",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Welcome to TasKit",
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*LATEST TICKETS* :admission_tickets:",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Raise Ticket",
            emoji: true,
          },
          style: "primary",
          value: "click_me_123",
          action_id: "raise-ticket",
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Fix the Loading Bugs*",
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Ticket ID #A4Z65",
            emoji: true,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "Owner: `Robert Hendrick`",
          },
          {
            type: "mrkdwn",
            text: "Assigned To: `James Bond` `Alec Trevelyan`",
          },
          {
            type: "mrkdwn",
            text: "Status: :large_yellow_circle: `Open`",
          },
          {
            type: "mrkdwn",
            text: "Deadline: `17/09/2022`",
          },
        ],
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Push Code to Production*",
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Ticket ID #7Z34G",
            emoji: true,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "Owner: `Rajiv Gupta`",
          },
          {
            type: "mrkdwn",
            text: "Assigned To: `Ashman Mehra` `Aditya Sharma`",
          },
          {
            type: "mrkdwn",
            text: "Status: :large_blue_circle: `Accepted`",
          },
          {
            type: "mrkdwn",
            text: "Deadline: `29/10/2022`",
          },
        ],
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Add the Extra Edit Feature*",
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Ticket ID #8P03R",
            emoji: true,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "Owner: `John Doe`",
          },
          {
            type: "mrkdwn",
            text: "Assigned To: `Anna Fredrick`",
          },
          {
            type: "mrkdwn",
            text: "Status: :large_green_circle: `Completed`",
          },
          {
            type: "mrkdwn",
            text: "Deadline: `6/11/2022`",
          },
        ],
      },
      {
        type: "divider",
      },
    ],
  };
  return view;
}

function raise_ticket() {
  var view = {
    callback_id: "raise-ticket-submit",
    title: {
      type: "plain_text",
      text: "TasKit",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Raise Ticket",
      emoji: true,
    },
    type: "modal",
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "Ticket Title",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "multi_users_select",
          placeholder: {
            type: "plain_text",
            text: "Select users",
            emoji: true,
          },
          action_id: "multi_users_select-action",
        },
        label: {
          type: "plain_text",
          text: "Assigned To",
          emoji: true,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "checkboxes",
            options: [
              {
                text: {
                  type: "mrkdwn",
                  text: "*Keep Ticket Open*",
                },
                description: {
                  type: "mrkdwn",
                  text: "_Open tickets can be accepted by anyone and their status will remain_  :large_yellow_circle: `Open` _till someones accepts it_",
                },
                value: "value-0",
              },
            ],
            action_id: "actionId-1",
          },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Deadline Time*",
        },
        accessory: {
          type: "timepicker",
          initial_time: "13:37",
          placeholder: {
            type: "plain_text",
            text: "Select time",
            emoji: true,
          },
          action_id: "timepicker-action",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Deadline Date*",
        },
        accessory: {
          type: "datepicker",
          initial_date: "1990-04-28",
          placeholder: {
            type: "plain_text",
            text: "Select a date",
            emoji: true,
          },
          action_id: "datepicker-action",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Notify Channels and Users*",
        },
        accessory: {
          type: "multi_conversations_select",
          placeholder: {
            type: "plain_text",
            text: "Select conversations",
            emoji: true,
          },
          action_id: "multi_conversations_select-action",
        },
      },
    ],
  };
  return view;
}

function ticket_confirmation() {
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

module.exports = {
  app_home,
  raise_ticket,
  ticket_confirmation
};
