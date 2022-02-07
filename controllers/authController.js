const authModel = require("../models/authModel");
const bcryptjs = require("bcryptjs");

exports.singIn = async (req, res) => {
  if (!req.body) res.status(403).json({ message: "Invalit data" });
  console.log(454);
  const { email, password } = req.body;
  const user = await authModel.verifyEmail(email, res);

  const passwordVerify = bcryptjs.compareSync(password, user.password);
  if (passwordVerify) {
    return res.json(user);
  }
  return res.status(403).json({ message: "Invalid pasword" });
};
