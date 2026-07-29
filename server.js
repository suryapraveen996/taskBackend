const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/testdb')
.then(() => console.log("db connected"));

app.use("/api/tasks", require("./routes/taskroutes"));


app.listen(3000,() => {
  console.log("server connected");
});

app.get("/", (req,res) => {
  res.send("server connected");
})