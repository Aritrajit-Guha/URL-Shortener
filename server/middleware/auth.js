// middleware/auth.js
const jwt = require('jsonwebtoken');
const { User } = require('../models/model');

async function authRequired(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({error: "Unauthorized: No token provided"});

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({error: "Unauthorized: Invalid user"});

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({error: "Unauthorized: Invalid token"});
  }
}

module.exports = { authRequired };