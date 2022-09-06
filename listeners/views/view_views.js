function task_confirmation() {
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
  task_confirmation
};
