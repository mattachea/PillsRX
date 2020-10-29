const express = require("express");
const router = require("express").Router();
const User = require("../../database/models/User");
const bcrypt = require("bcrypt");
const passport = require("../../passport");

// @route    GET /api/users
// @desc     Get all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Get Users Error: " + err));
});

// @route    POST /api/users/login
// @desc     Login with a user
router.route("/login").post(passport.authenticate("local"), (req, res) => {
  res.send("success: " + req.user);
});

// @route    POST /api/users/register
// @desc     Create a user
router.route("/register").post((req, res, next) => {
  const { username, email, password } = req.body;

  //check for existing user
  User.findOne({ email: email }, (err, user) => {
    if (err) return res.status(400).json({ msg: "MongoDB error" });
    else if (user) return res.status(400).json({ msg: "User already exists" });
    else {
      // generate hashed password, create new user, store in database
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(400).json({ msg: "Bcrypt failed to hash" });
        } else {
          const newUser = new User({
            username: username,
            email: email,
            password: hash,
          });

          newUser
            .save()
            .then((user) => {
              res.json(user);
            })
            .catch((err) => {
              res.status(400).json({ error: "New User Error: " + err });
            });
        }
      });
    }
  });
});

// // @route    DELETE /api/users/:id
// // @desc     Delete a user
// router.route("/:id").delete((req, res) => {
//   User.findByIdAndDelete(req.params.id, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       return res.json({ success: true });
//     }
//   });
// });

module.exports = router;
