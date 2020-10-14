const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcrypt");

// @route    GET /users
// @desc     Get all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Get Users Error: " + err));
});

// @route    POST /users
// @desc     Create a user
router.route("/").post((req, res, next) => {
  const { name, email, password } = req.body;

  //check for existing user
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      return res.status(400).json({ msg: "User already exists" });
    } else {
      // generate hashed password, create new user, store in database
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          const newUser = new User({
            name: name,
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

// @route    DELETE /users/:id
// @desc     Delete a user
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({ success: true });
    }
  });
});

module.exports = router;
