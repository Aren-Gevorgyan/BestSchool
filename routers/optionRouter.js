const express = require("express");
const jsonParser = express.json();
const optionRouter = express.Router();
const optionController = require("../controllers/optionController");

optionRouter.post("/create", jsonParser, optionController.createOption);
optionRouter.put("/:id", jsonParser, optionController.upgradeOption);
optionRouter.delete("/:id", optionController.deleteOption);
// optionRouter.get("/", optionController.getOption);

module.exports = optionRouter;
