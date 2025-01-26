const express = require("express");
const mongoose = require("mongoose");
const BusDetails = new mongoose.Schema({
  busno: {
    type: String,
  },
  bustartingtime: {
    type: String,
  },
  busroute: {
    type: String,
  },
  busground: {
    type: String,
  },
  buscapacity: {
    type: Number,
  },
  drivername: {
    type: String,
  },
  driverphone: {
    type: String,
  },
  driverphoto: {
    type: String,
  },
  stops: [
    {
      stopname: String,
      stoptime: String,
    },
  ],
  address: {
    OriginalAddress: String,
    DestinationAddress: String,
    Distance: String,
    Duration: String,
  },
});
module.exports = mongoose.model("BusDetails", BusDetails);
