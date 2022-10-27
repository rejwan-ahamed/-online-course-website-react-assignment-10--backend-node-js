const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());

const courseDB = require("./course.json");

app.get("/course", (req, res) => {
  res.send(courseDB);
});

app.get("/course/:id", (req, res) => {
  const ID = req.params.id;
  const courseData = courseDB.find((course) => course.id == ID);
  res.send(courseData);
});

app.listen(port, () => {
  console.log(`Api listening port is ${port}`);
});
