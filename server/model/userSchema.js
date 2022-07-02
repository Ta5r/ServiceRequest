const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  EID: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  block: {
    type: Number,
    required: true,
  },
  qrtr: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("USER", userSchema);

module.exports = User;