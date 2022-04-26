const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const optionRouter = require("./routers/optionRouter");
const questionRouter = require("./routers/questionRouter");
const optionItemsRouter = require("./routers/optionItemsRouter");
require('dotenv').config()

mongoose.connect(
  "mongodb+srv://Aren:best@cluster0.eugmc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err, res) => {
    if (err) return console.log(err, 'Error:');
    app.listen(process.env.PORT || "3020", () => {
      console.log(`Connect success port:${process.env.PORT}`);
    });
  }
);

app.use(cors());
app.use("/", optionRouter);
app.use("/option-items", optionItemsRouter);
app.use("/questions", questionRouter);
app.use("/sign-in", authRouter);
