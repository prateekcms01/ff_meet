const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/hello", (req, res) => {
  res.status(200).send("Hello world");
});
const meetingRoutes = require("./routes/meetingroutes");
const meetingControlsRoutes = require("./routes/meetingControlsRoutes");

app.use("/meetings", meetingRoutes);
app.use("/meeting-controls", meetingControlsRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is running in port ${PORT}`);
});

// const express = require('express');

// const meetingRoutes = require('./routes/meetingRoutes');
// const meetingControlsRoutes = require('./routes/meetingControlsRoutes');

// // Routes
// app.use('/meetings', meetingRoutes);
// app.use('/meeting-controls', meetingControlsRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
