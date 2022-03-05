const express = require("express");
const jsonParser = express.json();
const questionRouter = express.Router();
const questionController = require("../controllers/questionController");

questionRouter.post("/create", jsonParser, questionController.createQuestion);
questionRouter.put("/:id", jsonParser, questionController.upgradeQuestion);
questionRouter.delete("/:id", questionController.deleteQuestion);
questionRouter.get("/", questionController.getQuestion);

module.exports = questionRouter;
