const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitedOn: {
      type: [Date], // array of Date objects
      default: [],
    },
    clicks: {
      type: Number,
      default: 0,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const userSchema=mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    reqiured: true
  }
},{
  timestamps: true
})

const URL = mongoose.model("URL", urlSchema);
const User = mongoose.model("User", userSchema);

module.exports = { URL, User };

