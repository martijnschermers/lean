//
// This server will be started by Protractor in end-to-end tests.
// Add your API mocks for your specific project in this file.
//
const express = require("express");
const port = 3333;

let app = express();
let routes = require("express").Router();

// Global mock objects
const user = {
  username: "username",
  email: "first.last@avans.nl",
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzUwMjIzNjQsImlhdCI6MTU3NDE1ODM2NCwic3ViIjp7ImVtYWlsIjoiYWRtaW5AYXZhbnMubmwiLCJpZCI6IjVkYzlhY2Y3NmUzOTVhMTY1ODkwMjk2MiJ9fQ.qRPy-lTPIopAJPrarJYZkxK0suUJF_XZ9szeTtie4nc"
};

const exercises = [
  {
    _id: "61950e163526e4c9533dd4f5",
    name: "Bench press",
    description: "Bench press description",
    primaryMuscle: "Chest",
    category: "Barbell",
    type: "Strength",
    predefined: true,
    __v: 0
  },
  {
    _id: "61950ff63526e4c9533dd50e",
    name: "Squat",
    description: "Squat description",
    primaryMuscle: "Quads",
    category: "Barbell",
    type: "Strength",
    predefined: true,
    __v: 0
  },
  {
    _id: "619bde033b174a700c923e11",
    name: "Deadlift",
    description: "Deadlift description",
    primaryMuscle: "Back",
    category: "Barbell",
    type: "Strength",
    predefined: true,
    __v: 0
  }
];

const workouts = [
  {
    _id: "",
    name: "My workout",
    duration: "01:00:10",
    volume: 400,
    prs: 5,
    date: new Date(),
  }
];

// Add CORS headers so our external Angular app is allowed to connect
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

routes.post("/api/login", (req, res) => {
  res.status(200).json(user);
});

routes.get("/api/exercise", (req, res) => {
  res.status(200).json(exercises);
});

routes.post("/api/workout", (req, res) => {
  res.status(200).json(workouts);
});

routes.get("/api/workout", (req, res) => {
  res.status(200).json(workouts);
});

//
// Write your own mocking API endpoints here.
//

// Finally add your routes to the app
app.use(routes);

app.use("*", function(req, res, next) {
  next({ error: "Non-existing endpoint" });
});

app.use((err, req, res) => {
  res.status(400).json(err);
});

app.listen(port, () => {
  console.log("Mock backend server running on port", port);
});

process.on("uncaughtException", (err) => {
  console.log("There was an uncaught error", err);
  process.exit(1); //mandatory (as per the Node.js docs)
});
