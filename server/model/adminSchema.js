const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  AID: {
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
  cpassword: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("ADMIN", adminSchema);

module.exports = Admin;