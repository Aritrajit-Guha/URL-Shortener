// routes/route.js
const express = require('express');
const router = express.Router();

const {
  handleGenerateNewShortURL,
  handlShortUrltoRedirectUrl,
  handleGettAllURLS,
  handleSignupNewUser,
  handleUserLogin,
  handleLogout
} = require('../controllers/controller');

const { authRequired } = require('../middleware/auth');

// ----------------------------- Public routes -----------------------------

router.post("/api/signup", handleSignupNewUser);

router.post("/api/login", handleUserLogin);

router.post("/api/logout", handleLogout);

// ----------------------------- Protected routes -----------------------------

router.post("/api/generate", authRequired, handleGenerateNewShortURL);

router.get("/api/urls", authRequired, handleGettAllURLS);

// ----------------------------- Public redirect by shortId -----------------------------

router.get("/r/:url", handlShortUrltoRedirectUrl);

module.exports = router;