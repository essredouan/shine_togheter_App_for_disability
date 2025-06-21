const jwt = require('jsonwebtoken');

module.exports = function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ msg: 'No token provided' });

  const token = authHeader.split(' ')[1]; // Bearer <token>

  if (!token) return res.status(401).json({ msg: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ msg: 'Invalid or expired token' });
  }
};
