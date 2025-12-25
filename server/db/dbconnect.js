const mongoose = require('mongoose');

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected!");
  } catch (err) {
    console.error("MongoDB couldn't be connected!", err.message);
    process.exit(1); // Exit if DB connection fails
  }
};

module.exports = ConnectDB;