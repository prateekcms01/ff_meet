const db = require("../database/db");

// const createMeeting = (req, res) => {
//   const { meetingName } = req.body;
//   const query = "INSERT INTO meetings (name, is_active) VALUES (?, 1)";
//   db.query(query, [meetingName], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.status(201).json({ meetingId: result.insertId });
//   });
// };

const createMeeting = (req, res) => {
  console.log("Received request to create meeting:", req.body);
  const { meetingName } = req.body;
  const query = "INSERT INTO meetings (name, is_active) VALUES (?, 1)";
  db.query(query, [meetingName], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: err.message });
    }
    console.log("Meeting created with ID:", result.insertId);
    res.status(201).json({ meetingId: result.insertId });
  });
};

const joinMeeting = (req, res) => {
  const { meeting_id } = req.body;
  const query = "INSERT INTO participants (meeting_id) VALUES (?, ?)";
  console.log(req.body);
  //   console.log("user_id", user_id);
  db.query(query, [meeting_id, user_id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Joined meeting" });
  });
};

module.exports = { createMeeting, joinMeeting };
