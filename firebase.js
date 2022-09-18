var admin = require("firebase-admin");

// nanoid package allows craetion of task IDs
const { customAlphabet } = require("nanoid");
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nanoid = customAlphabet(alphabet, 6);

// fetch the service account key JSON file contents
var service_account = require("./serviceAccountKey.json");

// initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(service_account),
  // The database URL depends on the location of the database
  databaseURL:
    "https://workit-taskit-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

// as an admin, the app has access to read and write all data, regardless of Security Rules
var database = admin.database();

function createTaskData(data) {
  var taskID = nanoid();
  admin.database().ref("tasks/" + data.workspace + "/" + taskID)
    .set({
      channel: data.channel,
      title: data.title,
      description: data.description,
      assignees: data.assignees,
      owner: data.owner,
      deadline: data.deadline,
      priority: data.priority,
      status: "open",
    });
  return taskID;
}

async function readTaskData(data) {
  var ref = "";
  if (data.teamID) {
    ref = `tasks/${data.teamID}`
  } if (data.taskID) {
    ref += `/${data.taskID}`
  }
  
  var recentTasksRef = admin.database().ref(ref);
  var snapshot = await recentTasksRef.get();
  return snapshot.val();
}

async function updateTaskData(data) {
  if (data.status) {
    admin.database().ref(`tasks/${data.teamID}/${data.taskID}/status`).set(data.status);
  }
  
}

module.exports = {
  createTaskData,
  readTaskData,
  updateTaskData
};
