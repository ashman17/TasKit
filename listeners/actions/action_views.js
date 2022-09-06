function createTaskModal() {
  return {
    callback_id: "create-task-submit",
    title: {
      type: "plain_text",
      text: "Create a Task",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Create",
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
        block_id: "channel-block",
        element: {
          type: "channels_select",
          placeholder: {
            type: "plain_text",
            text: "Select a channel for the task",
            emoji: true,
          },
          action_id: "channel-action",
        },
        label: {
          type: "plain_text",
          text: "Channel",
          emoji: true,
        },
      },
      {
        type: "input",
        block_id: "title-block",
        element: {
          type: "plain_text_input",
          action_id: "title-action",
          placeholder: {
            type: "plain_text",
            text: "Keep this brief",
          },
        },
        label: {
          type: "plain_text",
          text: "Title",
          emoji: true,
        },
      },
      {
        type: "input",
        block_id: "description-block",
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "description-action",
          placeholder: {
            type: "plain_text",
            text: "Go for the details here",
          },
        },
        label: {
          type: "plain_text",
          text: "Discription",
          emoji: true,
        },
        optional: true,
      },
      {
        type: "input",
        block_id: "assigned-to-block",
        element: {
          type: "multi_users_select",
          placeholder: {
            type: "plain_text",
            text: "Skip this to keep it open for anyone to accept",
            emoji: true,
          },
          action_id: "assigned-to-action",
        },
        label: {
          type: "plain_text",
          text: "Assigned To",
          emoji: true,
        },
        optional: true,
      },
      {
        type: "section",
        block_id: "deadline-date-block",
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
          action_id: "deadline-date-action",
        },
      },
      {
        type: "section",
        block_id: "deadline-time-block",
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
          action_id: "deadline-time-action",
        },
      },
      {
        block_id: "priority-block",
        type: "input",
        element: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select an item",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Critical",
                emoji: true,
              },
              value: "critical",
            },
            {
              text: {
                type: "plain_text",
                text: "Important",
                emoji: true,
              },
              value: "important",
            },
            {
              text: {
                type: "plain_text",
                text: "Normal",
                emoji: true,
              },
              value: "normal",
            },
            {
              text: {
                type: "plain_text",
                text: "Low",
                emoji: true,
              },
              value: "low",
            },
          ],
          action_id: "priority-action",
        },
        label: {
          type: "plain_text",
          text: "Priority",
          emoji: true,
        },
      },
    ],
  };
}

module.exports = {
  createTaskModal,
};
