const optionItemsModel = require("../models/optionItemsModel");

exports.createOptionItem = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Invalid data" });

  const { title, image, optionId } = req.body;

  console.log(title, image, optionId);

  const data = {
    title,
    image,
    optionId,
  };

  const newData = await optionItemsModel.createItem(data, res);

  return res.status(202).json(newData);
};

exports.upgradeOptionItem = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Invalid data" });

  const { title, image, optionId } = req.body;
  const { id } = req.params;

  const data = {
    title,
    image,
    optionId,
  };

  const newData = await optionItemsModel.upgradeItem(id, data, res);

  return res.status(202).json(newData);
};

exports.deleteOptionItem = async (req, res) => {
  const { id } = req.params;

  const newData = await optionItemsModel.deleteItem(id, res);

  return res.status(202).json(newData);
};

exports.getOptionItem = async (req, res) => {
  const newData = await optionItemsModel.getItems(res);

  return res.status(202).json(newData);
};
