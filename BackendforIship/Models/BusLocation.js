const mongoose = require("mongoose");

const busLocationSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: true,
  },
  busLatitude: {
    type: String,
    required: true,
  },
  busLongitude: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BusLocation", busLocationSchema);
