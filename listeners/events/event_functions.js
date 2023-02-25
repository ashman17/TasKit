const eventViews = require("./event_views.js");

const openAppHome = async ({ event, client, body }) => {
  try {
    refreshAppHome(client, event.user, body.team_id);
  } catch (error) {
    console.log(error);
  }
}

const refreshAppHome = async (client, userId, teamId) => {
  try {
    const result = await client.views.publish({
      user_id: userId,
      view: await eventViews.openAppHome(teamId)
    });
  } catch (error) {
    console.log(error);
  }
}


module.exports = { 
  openAppHome,
  refreshAppHome
};