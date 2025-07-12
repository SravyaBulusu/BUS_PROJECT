const express = require("express");
const mongoose = require("mongoose");
const StudentDetails = new mongoose.Schema({
  name: {
    type: String,
  },
  rollno: {
    type: String,
  },
  busno: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  department: {
    type: String,
  },
  campus: {
    type: String,
  },
  course: {
    type: String,
  },
  phoneno: {
    type: String,
  },
  routeind: {
    type: String,
  },
  year: {
    type: String,
  },
  gender: {
    type: String,
  },
});
// module.exports = mongoose.model("StudentDetails", StudentDetails);
module.exports = mongoose.model("StudentDetails", StudentDetails, "StudentDetails");

