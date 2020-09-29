const router = require("express").Router();
const User = require("../../models/User");

// @route    GET /users
// @desc     Get all users
// @access   public
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Get Users Error: " + err));
});

// @route    POST /users
// @desc     Create a user
// @access   public
router.route("/").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("New user added: " + username))
    .catch((err) => res.status(400).json("New User Error: " + err));
});

// @route     DELETE /users/:id
// @desc     Create a user
// @access   public
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
