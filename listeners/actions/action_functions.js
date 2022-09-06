const actionViews = require("./action_views.js");

const createTask = async ({ ack, body, client }) => {
  await ack();
  
  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: actionViews.createTaskModal()
    });
  }
  catch (error) {
    console.log(error);
  }  
}

module.exports = { createTask };