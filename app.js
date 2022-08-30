const views = require("./views.js");

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.message("hello", async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});

app.event("app_home_opened", async ({ event, client }) => {
  try {
    const result = await client.views.publish({
      user_id: event.user,
      view: views.app_home()
    });
  } catch (error) {
    console.log(error);
  }
});

app.action('raise-ticket', async ({ ack, body, client }) => {
  await ack();
  
  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: views.raise_ticket()
    });
  }
  catch (error) {
    console.log(error);
  }
  
});

// app.view('raise-ticket-submit', async ({ ack, body, view, client, logger }) => { 
//   await ack();
  
//   try {
//     console.log("Our modal is complete!!!");
//   }
//   catch (error) {
//     console.log(error);
//   }

// });

app.view('raise-ticket-submit', async ({ ack, body, client, view }) => {
  try {
    await ack({
      response_action: 'update',
      view: views.ticket_confirmation(),
    });
  } catch (error) {
    console.log(error);
  }
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
