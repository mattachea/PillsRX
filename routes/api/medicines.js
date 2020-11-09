const router = require("express").Router();
const Medicine = require("../../database/models/Medicine");

// @route    GET /api/medicines
// @desc     Get all medicines for user with userId
router.route("/:userId").get((req, res) => {
  Medicine.find({ userId: req.params.userId })
    .then((medicines) => {
      res.json(medicines);
    })
    .catch((err) => res.status(400).json("Medicine Get Error: " + err));
});

// @route    POST /api/medicines
// @desc     Create a medicine
router.route("/").post((req, res) => {
  const newMedicine = new Medicine({
    userId: req.body.userId,
    name: req.body.name,
    dosage: req.body.dosage,
    time: req.body.time,
    completed: req.body.completed,
  });

  newMedicine
    .save()
    .then((medicine) => res.json(medicine))
    .catch((err) => res.status(400).json("Medicine Add Error: " + err));
});

// @route    DELETE /api/medicines/:id
// @desc     Delete a medicine by id
router.route("/:id").delete((req, res) => {
  Medicine.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({ success: true });
    }
  });
});

// @route    POST /medicines/:id
// @desc     Toggle completed field of a medicine by id

router.route("/completed/:id").post((req, res) => {
  Medicine.findByIdAndUpdate(
    req.params.id,
    { completed: !req.body.completed },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          success: true,
        });
      }
    }
  );
});

module.exports = router;
