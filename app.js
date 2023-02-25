const { App } = require("@slack/bolt");

const { registerListeners } = require("./listeners");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

registerListeners(app);

(async () => {
  // Start your app
  try {
    await app.start(process.env.PORT || 3000);
    console.log("⚡️ Bolt app is running!");
  } catch (error) {
    console.log("Could not start Bolt app.")
  }
  
})();