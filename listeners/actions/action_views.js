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
        block_id: "deadline-date-block",
        element: {
          type: "datepicker",
          initial_date: "2022-09-15",
          placeholder: {
            type: "plain_text",
            text: "Select a date",
            emoji: true,
          },
          action_id: "deadline-date-action",
        },
        label: {
          type: "plain_text",
          text: "Due Date and Time",
          emoji: true,
        },
      },
      {
        type: "input",
        block_id: "deadline-time-block",
        element: {
          type: "timepicker",
          initial_time: "13:37",
          placeholder: {
            type: "plain_text",
            text: "Select time",
          },
          action_id: "deadline-time-action",
        },
        label: {
          type: "plain_text",
          text: " ",
          emoji: true,
        },
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
                text: ":red_circle: Critical",
                emoji: true,
              },
              value: "critical",
            },
            {
              text: {
                type: "plain_text",
                text: ":large_blue_circle: Important",
                emoji: true,
              },
              value: "important",
            },
            {
              text: {
                type: "plain_text",
                text: ":large_yellow_circle: Normal",
                emoji: true,
              },
              value: "normal",
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
    ],
  };
}

module.exports = {
  createTaskModal,
};
