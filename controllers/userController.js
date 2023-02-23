const User = require("../models/userModal");

//loginUser
const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

// signuUser
const signupUser = async (req, res) => {
  res.json({ message: "signup" });
};

module.exports = {
  loginUser,
  signupUser,
};
