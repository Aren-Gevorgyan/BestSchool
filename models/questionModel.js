const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    subTitle: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const question = mongoose.model("question", schema);

exports.create = async (data, res) => {
  try {
    const questionData = await question.create(data);

    if (!questionData) return res.status(403).json({ messgae: "Invaild data" });

    return questionData;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ messgae: "Invaild data", err });
  }
};

exports.upgrade = async (itemId, data, res) => {
  try {
    const questionData = await question.findByIdAndUpdate(
      {
        _id: ObjectId(itemId),
      },
      data
    );

    if (!questionData) return res.status(403).json({ messgae: "Invaild data" });

    return questionData;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ messgae: "Invaild data", err });
  }
};

exports.delete = async (itemId, res) => {
  try {
    const questionData = await question.findByIdAndDelete({
      _id: ObjectId(itemId),
    });

    if (!questionData) return res.status(403).json({ messgae: "Invaild data" });

    return questionData;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ messgae: "Invaild data", err });
  }
};

exports.get = async (res) => {
  try {
    const questionData = await question.find({});
    if (!questionData) return res.status(403).json({ messgae: "Invaild data" });

    return questionData;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ messgae: "Invaild data", err });
  }
};
