const express = require("express");
const {
  toggleMute,
  toggleVideo,
  addReaction,
  raiseHand,
  endCall,
  addCaption,
} = require("../controllers/meetingControlsController");

const router = express.Router();

// Routes
router.post("/toggle-mute", toggleMute);
router.post("/toggle-video", toggleVideo);
router.post("/reaction", addReaction);
router.post("/raise-hand", raiseHand);
router.post("/end-call", endCall);
router.post("/caption", addCaption);

module.exports = router;
