// routes/organizations.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // assume organizations stored in User model

// Get all organizations (role: 'organization')
router.get('/', async (req, res) => {
  try {
    const organizations = await User.find({ role: 'organization' });
    res.json(organizations);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch organizations' });
  }
});

module.exports = router;
