const db = require("../database/db");

const toggleMute = (req, res) => {
  const { meetingId, userId, isMuted } = req.body;
  const query =
    "UPDATE participants SET is_muted = ? WHERE meeting_id = ? AND user_id = ?";
  db.query(query, [isMuted, meetingId, userId], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: `User ${isMuted ? "muted" : "unmuted"}` });
  });
};

const toggleVideo = (req, res) => {
  const { meetingId, userId, isVideoOn } = req.body;
  const query =
    "UPDATE participants SET is_video_on = ? WHERE meeting_id = ? AND user_id = ?";
  db.query(query, [isVideoOn, meetingId, userId], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res
      .status(200)
      .json({ message: `Video ${isVideoOn ? "enabled" : "disabled"}` });
  });
};

const addReaction = (req, res) => {
  const { meetingId, userId, reaction } = req.body;
  const query =
    "INSERT INTO reactions (meeting_id, user_id, reaction) VALUES (?, ?, ?)";
  db.query(query, [meetingId, userId, reaction], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Reaction added" });
  });
};

const raiseHand = (req, res) => {
  const { meetingId, userId } = req.body;
  const query = "INSERT INTO hand_raises (meeting_id, user_id) VALUES (?, ?)";
  db.query(query, [meetingId, userId], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Hand raised" });
  });
};

const endCall = (req, res) => {
  const { meetingId } = req.body;
  const query = "UPDATE meetings SET is_active = 0 WHERE id = ?";
  db.query(query, [meetingId], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Meeting ended" });
  });
};

const addCaption = (req, res) => {
  const { meetingId, userId, caption } = req.body;
  const query =
    "INSERT INTO captions (meeting_id, user_id, caption) VALUES (?, ?, ?)";
  db.query(query, [meetingId, userId, caption], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Caption added" });
  });
};

module.exports = {
  toggleMute,
  toggleVideo,
  addReaction,
  raiseHand,
  endCall,
  addCaption,
};
