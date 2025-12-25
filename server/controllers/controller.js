// controllers/controller.js
const { nanoid } = require("nanoid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { URL, User } = require("../models/model");

// ----------------------------- Auth: Signup/Login/Logout -----------------------------

async function handleSignupNewUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Name, email, and password are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: "Email already in use" });
    }

    const hash = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hash });

    return res.status(201).json({msg :"Signup Successful🎉🥳"})
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "No such user exist" });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(400).json({ msg: "Wrong Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2h" });

    // Better Version (Works on Localhost AND Render)
const isProduction = process.env.NODE_ENV === 'production';

res.cookie("token", token, {
  httpOnly: true,
  // If we are online, use 'none'. If we are local, use 'lax'.
  sameSite: isProduction ? "none" : "lax", 
  // If we are online, force HTTPS. If local, HTTP is fine.
  secure: isProduction ? true : false, 
  maxAge: 24 * 60 * 60 * 1000,
});

    return res.status(200).json({ msg: "Login successful🎈🎊", user: { name: user.name, email: user.email } });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

function handleLogout(req, res) {
  res.clearCookie("token");
  return res.status(200).json({msg: "Logging Out!..."});
}

// ----------------------------- URL Shortener Logic -----------------------------------

async function handleGenerateNewShortURL(req, res) {
  try {
    const shortID = nanoid(6);
    const body = req.body;

    if (!body.url) {
      return res.status(400).json({ err: "Url is missing!" });
    }

    // req.user should be set by auth middleware after verifying JWT
    await URL.create({
      shortUrl: shortID,
      redirectUrl: body.url,
      visitedOn: [],
      clicks: 0,
      createdBy: req.user?._id,
    });

    return res.status(201).json({ id: shortID, msg: "URL Created✨" });
  } catch (err) {
    return res.status(400).json({ err: "Cant add", details: err.message });
  }
};

async function handlShortUrltoRedirectUrl(req, res) {
  try {
    const shortId = req.params.url;
    const entry = await URL.findOne({ shortUrl: shortId });
    if (!entry) {
      return res.status(400).json({ msg: `No such url with shortId ${shortId} is present` });
    }
    entry.clicks += 1;
    entry.visitedOn.push(new Date());
    await entry.save();
    return res.redirect(entry.redirectUrl);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
}

async function handleGettAllURLS(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized: Please login first😡" });
    }
    const urls = await URL.find({ createdBy: req.user._id });
    return res.json(urls);
  } catch (err) {
    return res.status(500).json({ error: "Error loading All URLS!", msg: err.message });
  }
}

module.exports = {
  handleGenerateNewShortURL,
  handlShortUrltoRedirectUrl,
  handleGettAllURLS,
  handleSignupNewUser,
  handleUserLogin,
  handleLogout,
};