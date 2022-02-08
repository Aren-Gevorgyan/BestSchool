const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./routers/authRouter");
const questionRouter = require("./routers/questionRouter");

mongoose.connect(
  "mongodb://localhost:27017/bestschool",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err, res) => {
    if (err) return console.log(err);
    app.listen("3020", () => {
      console.log("Connect success");
    });
  }
);

app.use("/question", questionRouter);
app.use("/", authRouter);
