const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: { type: String },
    items: [{ type: Object }],
  },
  {
    timestamps: true,
  }
);

const option = mongoose.model("option", schema);

exports.create = async (data, res) => {
  try {
    const newOption = await option.create(data);

    if (!newOption) return res.status(403).json({ messgae: "Invaild data" });

    return newOption;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};

exports.upgrade = async (id, data, res) => {
  try {
    const upgradeOption = await option.findByIdAndUpdate(
      { _id: ObjectId(id) },
      data
    );

    if (!upgradeOption)
      return res.status(403).json({ messgae: "Invaild data" });

    return upgradeOption;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};

exports.delete = async (id, res) => {
  try {
    const deletedOption = await option.findByIdAndDelete({ _id: ObjectId(id) });

    if (!deletedOption)
      return res.status(403).json({ messgae: "Invaild data" });

    return deletedOption;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};

exports.get = async (res) => {
  try {
    const options = await option.find({});

    if (!options) return res.status(403).json({ messgae: "Invaild data" });

    return options;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};
