const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    optionId: { type: mongoose.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

const optionItem = mongoose.model("optionItems", schema);

exports.createItem = async (data, res) => {
  try {
    const newOptionItem = await optionItem.create(data);

    if (!newOptionItem)
      return res.status(403).json({ message: "Invalid data" });

    return newOptionItem;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};

exports.upgradeItem = async (id, data, res) => {
  try {
    const upgradeOptionItem = await optionItem.findByIdAndUpdate(
      { _id: ObjectId(id) },
      data,
      { new: true }
    );

    if (!upgradeOptionItem)
      return res.status(403).json({ message: "Invalid data" });

    return upgradeOptionItem;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};

exports.deleteItem = async (id, res) => {
  try {
    const deletedOptionItem = await optionItem.findByIdAndDelete({
      _id: ObjectId(id),
    });

    if (!deletedOptionItem)
      return res.status(403).json({ message: "Invalid data" });

    return deletedOptionItem;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};

exports.getItems = async (res) => {
  try {
    const optionItems = await optionItem.find({});

    if (!optionItems) return res.status(403).json({ message: "Invalid data" });

    return optionItems;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};
