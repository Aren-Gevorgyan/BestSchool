const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const authRouter = require("./routers/authRouter");
const optionRouter = require("./routers/optionRouter");
const questionRouter = require("./routers/questionRouter");
const optionItemsRouter = require("./routers/optionItemsRouter");

mongoose.connect(
  "mongodb://0.0.0.0:27017/bestschool",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err, res) => {
    if (err) return console.log(err);
    app.listen("3020", () => {
      console.log("Connect success port:3020");
    });
  }
);

app.use(cors());
app.use("/option", optionRouter);
app.use("/option-items", optionItemsRouter);
app.use("/question", questionRouter);
app.use("/sign-in", authRouter);
