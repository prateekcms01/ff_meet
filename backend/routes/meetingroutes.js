const express = require("express");
const {
  createMeeting,
  joinMeeting,
} = require("../controllers/meetingController"); // Importing controller functions

const router = express.Router();

// Route to create a new meeting
router.post("/create", createMeeting);

// Route to join an existing meeting
router.post("/join", joinMeeting);

module.exports = router; // Exporting the router
