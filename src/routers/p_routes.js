const express = require("express");
const router = new express.Router();
const Pantry = require("../schema/pantries")

router.post("/pantry", (req, res) => {
  console.log(req.body);
  const user = new Pantry(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/pantry", async (req, res) => {
  console.log(req.body);
  try {
    const user = new Pantry(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(createUser);
  }
});

router.get("/pantry", async (req, res) => {
  try {
    const PantryData = await Pantry.find();
    res.send(PantryData);
  } catch (err) {
    res.send(err);
  }
});

router.get("/pantry/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const pData = await Pantry.findById(_id);

    if (!pData) {
      return res.status(401).send();
    } else {
      res.send(pData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/pantry/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const delData = await Pantry.findByIdAndDelete(_id);
    if (!_id) {
      res.status(401).send();
    }
    res.send(delData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/pantry/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatePantry = await Pantry.findByIdAndUpdate(_id, req.body);
    res.send(updatePantry);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
