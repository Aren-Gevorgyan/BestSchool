const express = require("express");
const jsonParser = express.json();
const authRouter = express.Router();
const authController = require("../controllers/authController.js");

authRouter.post("/", jsonParser, authController.singIn);

module.exports = authRouter;
