const express = require('express');
const router = express.Router();
const Sport = require('../models/Sport');

// Get all sports
router.get('/', async (req, res) => {
  try {
    const sports = await Sport.find();
    res.json(sports);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Add new sport
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newSport = new Sport({ title, description });
    await newSport.save();
    res.json({ msg: 'Sport added' });
  } catch (err) {
    res.status(400).json({ msg: 'Failed to add sport' });
  }
});

module.exports = router;
