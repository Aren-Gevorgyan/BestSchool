const { query } = require("express");
const questionModel = require("../models/questionModel");

exports.createQuestion = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Invalid data" });
  const { subTitle, image, answer } = req.body;
  const data = {
    subTitle,
    image,
    answer,
  };
  const newData = await questionModel.create(data, res);
  return res.status(202).json(newData);
};

exports.upgradeQuestion = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Invalid data" });
  const { subTitle, image, answer } = req.body;
  const { id } = req.params;

  const data = {
    subTitle,
    image,
    answer,
  };

  const upgradetData = await questionModel.upgrade(id, data, res);
  return res.status(202).json(upgradetData);
};

exports.deleteQuestion = async (req, res) => {
  const { id } = req.params;
  const allData = await questionModel.delete(id);
  return res.status(202).json(allData);
};

exports.getQuestion = async (req, res) => {
  const allData = await questionModel.get(res);

  return res.status(202).json(allData);
};
