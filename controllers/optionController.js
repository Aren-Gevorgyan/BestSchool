const optionModel = require("../models/optionModel");

exports.createOption = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Invalid data" });

  const { title } = req.body;

  const data = {
    title,
  };

  const newData = await optionModel.create(data, res);

  return res.status(202).json(newData);
};

exports.upgradeOption = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Invalid data" });

  const { title } = req.body;
  const { id } = req.params;

  const data = {
    title,
  };

  const newData = await optionModel.upgrade(id, data, res);

  return res.status(202).json(newData);
};

exports.deleteOption = async (req, res) => {
  const { id } = req.params;

  const newData = await optionModel.delete(id, res);

  return res.status(202).json(newData);
};

exports.getOption = async (req, res) => {
  console.log(555);
  const newData = await optionModel.get(res);

  return res.status(202).json(newData);
};
