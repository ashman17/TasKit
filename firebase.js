var admin = require("firebase-admin");

// nanoid package allows craetion of task IDs
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nanoid = customAlphabet(alphabet, 8);

// fetch the service account key JSON file contents
var service_account = require("./serviceAccountKey.json");

// initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(service_account),
  // The database URL depends on the location of the database
  databaseURL: "https://workit-taskit-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

// as an admin, the app has access to read and write all data, regardless of Security Rules
var database = admin.database();

function createTaskData(data) {
  admin.database().ref('tasks/' + data.workspace + "/" + nanoid()).set({
    channel: data.channel,
    title: data.title,
    discription: data.description,
    assignees: data.assignees,
    deadline: data.deadline,
    priority: data.priority
  });
  
}

function readTaskData(data) {
  
}

module.exports = {
  createTaskData
}
