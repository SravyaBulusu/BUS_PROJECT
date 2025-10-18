const express = require("express");
const router = express.Router();
const BusLocation = require("../Models/BusLocation");

// POST /update-data
router.post("/location-data", async (req, res) => {
  try {
    const dataArray = req.body; // your NodeMCU sends array of objects

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    const { busNumber, busLatitude, busLongitude, updatedAt } = dataArray[0];

    if (!busNumber || !busLatitude || !busLongitude) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newEntry = new BusLocation({
      busNumber,
      busLatitude,
      busLongitude,
      updatedAt,
    });

    await newEntry.save();

    res.status(200).json({ message: "Bus location saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
