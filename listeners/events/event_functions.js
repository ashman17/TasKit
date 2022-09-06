const eventViews = require("./event_views.js");

const appHomeOpened = async ({ event, client }) => {

  try {
    const result = await client.views.publish({
      user_id: event.user,
      view: eventViews.app_home()
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { appHomeOpened };