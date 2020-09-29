const router = require("express").Router();
const Medicine = require("../../models/Medicine");

router.route("/").get((req, res) => {
  Medicine.find()
    .then((medicines) => res.json(medicines))
    .catch((err) => res.status(400).json("Medicine Get Error: " + err));
});

router.route("/add").post((req, res) => {
  const userId = req.body.userId;
  const name = req.body.name;
  const dosage = req.body.dosage;
  const time = req.body.time;

  const newMedicine = new Medicine({
    userId,
    name,
    dosage,
    time,
  });

  newMedicine
    .save()
    .then(() => res.json("Medicine added: " + name))
    .catch((err) => res.status(400).json("Medicine Add Error: " + err));
});

module.exports = router;
