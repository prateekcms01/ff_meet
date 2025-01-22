const express = require("express");

const app = express();

app.use("", (req, res) => {
  res.status(200).send("Hello everyone");
});

app.listen(8000, () => {
  console.log("App is running in port 8000");
});
