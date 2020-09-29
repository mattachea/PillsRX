const router = require("express").Router();
const Medicine = require("../../models/Medicine");

// @route    GET /medicines
// @desc     Get all medicines
// @access   public
router.route("/").get((req, res) => {
  Medicine.find()
    .then((medicines) => res.json(medicines))
    .catch((err) => res.status(400).json("Medicine Get Error: " + err));
});

// @route    POST /medicines
// @desc     Create a medicine
// @access   public
router.route("/").post((req, res) => {
  const name = req.body.name;
  const dosage = req.body.dosage;
  const time = req.body.time;

  const newMedicine = new Medicine({
    // userId,
    name,
    dosage,
    time,
  });

  newMedicine
    .save()
    .then((medicine) => res.json(medicine))
    .catch((err) => res.status(400).json("Medicine Add Error: " + err));
});

// @route    DELETE /medicine/:id
// @desc     Delete a medicine by id
// @access   public
router.route("/:id").delete((req, res) => {
  Medicine.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({ success: true });
    }
  });
});

module.exports = router;
