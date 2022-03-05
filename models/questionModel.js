const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: { type: String, required: true},
    image: { type: String},
    answers: [{ type: String }],
    rightAnswer: {type: Number, required: true},
    optionId: { type: mongoose.Types.ObjectId, required: true},
  },
  {
    timestamps: true,
  }
);

const question = mongoose.model("question", schema);

exports.create = async (data, res) => {
  try {
    const newQuestion = await question.create(data);

    if (!newQuestion) return res.status(403).json({ message: "Invalid data" });

    return newQuestion;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};

exports.upgrade = async (itemId, data, res) => {
  try {
    const upgradeQuestion = await question.findByIdAndUpdate(
      {
        _id: ObjectId(itemId),
      },
      data
    );

    if (!upgradeQuestion)
      return res.status(403).json({ message: "Invalid data" });

    return upgradeQuestion;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};

exports.delete = async (itemId, res) => {
  try {
    const deletedQuestion = await question.findByIdAndDelete({
      _id: ObjectId(itemId),
    });

    if (!deletedQuestion)
      return res.status(403).json({ message: "Invalid data" });

    return deletedQuestion;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};

exports.get = async (res) => {
  try {
    const questions = await question.find({});
    if (!questions) return res.status(403).json({ message: "Invalid data" });

    return questions;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid data", err });
  }
};
