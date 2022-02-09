const optionModel = require("../models/optionModel");

exports.creaetOption = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Invalid data" });

  const { title, items } = req.body;

  const data = {
    title,
    items,
  };

  const newData = await optionModel.create(data, res);

  return res.status(202).json(newData);
};

exports.upgradeOption = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Invalid data" });

  const { title, items } = req.body;
  const { id } = req.params;

  const data = {
    title,
    items,
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
  const newData = await optionModel.get(res);

  return res.status(202).json(newData);
};
