//const message_views = require("./message_views.js");

const greet = async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
}

module.exports = { greet };