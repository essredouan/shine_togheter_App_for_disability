const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const User = require('../models/User');

router.get('/me', verifyToken, async (req, res) => {
  try {
    // req.user.id جاي من التوكن بعد التحقق
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
