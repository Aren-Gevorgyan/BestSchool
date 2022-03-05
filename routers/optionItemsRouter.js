const express = require("express");
const jsonParser = express.json();
const optionItemsRouter = express.Router();
const optionItemsController = require("../controllers/optionItemsController");

optionItemsRouter.post(
  "/create",
  jsonParser,
  optionItemsController.createOptionItem
);
optionItemsRouter.put(
  "/:id",
  jsonParser,
  optionItemsController.upgradeOptionItem
);
optionItemsRouter.delete("/:id", optionItemsController.deleteOptionItem);
optionItemsRouter.get("/", optionItemsController.getOptionItem);

module.exports = optionItemsRouter;
