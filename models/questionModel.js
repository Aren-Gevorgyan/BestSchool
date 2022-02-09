const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    subTitle: { type: String },
    image: { type: String },
    answer: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const question = mongoose.model("question", schema);

exports.create = async (data, res) => {
  try {
    const newQuestion = await question.create(data);

    if (!newQuestion) return res.status(403).json({ messgae: "Invaild data" });

    return newQuestion;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ messgae: "Invaild data", err });
  }
};

exports.upgrade = async (itemId, data, res) => {
  try {
    const upgradQuestion = await question.findByIdAndUpdate(
      {
        _id: ObjectId(itemId),
      },
      data
    );

    if (!upgradQuestion)
      return res.status(403).json({ messgae: "Invaild data" });

    return upgradQuestion;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ messgae: "Invaild data", err });
  }
};

exports.delete = async (itemId, res) => {
  try {
    const deletedQuestion = await question.findByIdAndDelete({
      _id: ObjectId(itemId),
    });

    if (!deletedQuestion)
      return res.status(403).json({ messgae: "Invaild data" });

    return deletedQuestion;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ messgae: "Invaild data", err });
  }
};

exports.get = async (res) => {
  try {
    const questions = await question.find({});
    if (!questions) return res.status(403).json({ messgae: "Invaild data" });

    return questions;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ messgae: "Invaild data", err });
  }
};
