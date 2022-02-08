const res = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const schema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    roles: [{ type: String, enum: ["admin"] }],
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("users", schema);

exports.verifyEmail = async (email, res) => {
  try {
    const user = await users.findOne({ email });
    if (!user) return res.status(403).json({ message: "Invalid email" });

    return user;
  } catch (err) {
    console.log("error: " + err);
    return res.status(403).json({ message: "Invalid email", errss });
  }
};
