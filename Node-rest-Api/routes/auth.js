const route = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// REGISTER
route.post("/register", async (req, res) => {
  try {
    //Generate Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create User
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //Save user and respond
    const newUser = await user.save();
    res.status(200).send(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});

// LOGIN
route.post("/login", async (req, res) => {
  try {
    //Email invalid
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("User not found");

    //Password incorrect
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isValidPassword) return res.status(400).send("Invalid password");

    //Login Successful
    return res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in");
  }
});

module.exports = route;
