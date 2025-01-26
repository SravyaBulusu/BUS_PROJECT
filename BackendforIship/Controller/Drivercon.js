const express = require("express");
const mongoose = require("mongoose");
const Mydb2 = require("../Models/Buschema");
const SendBus = async (req, res) => {

    const data=req.body;
    Mydb2.insertMany(data)
    .then(result=>
    {
       return res.status(200).json("Created Successfully")
    }
    )
    .catch(err=>{
      console.log(err);


    })
 
};

//Get For Bus
const FetchBus = async (req, res) => {
  try {
    const bus = await Mydb2.find();
    console.log(bus);
    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update for buses
const updateBus = async (req, res) => {
  try {
    const BusId = req.params.id;

    const updatedbus = await Mydb2.findByIdAndUpdate(
      BusId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedbus);
  } catch (error) {
    res.status(500).json({ error: "Error updating student" });
  }
};

const deleteBus = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBus = await Mydb2.findByIdAndDelete(id);

    if (deletedBus) {
      return res.status(200).json({ message: "Bus Info deleted successfully" });
    } else {
      return res.status(404).json({ message: "Bus not found" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const busStop = async (req, res) => {
  const { busId } = req.params;
  const { stopname, stoptime } = req.body;

  console.log("Bus ID:", busId); // Log the bus ID
  console.log("Stop Name:", stopname); // Log the stop name
  console.log("Stop Time:", stoptime); // Log the stop time
};


const justry=async (req, res) => {
  const { busno } = req.params;
  const updatedBusData = req.body;

  try {
      // Find the bus by bus number and update its stops
      const updatedBus = await Bus.findOneAndUpdate(
          { busno },
          updatedBusData,
          { new: true } // Return the updated document
      );

      if (!updatedBus) {
          return res.status(404).send("Bus not found");
      }

      res.status(200).json(updatedBus);
  } catch (error) {
      console.error("Error updating bus:", error);
      res.status(500).send("Server Error");
  }
};


const getBusById = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const bus = await Mydb2.findById(id);
    if (!bus) return res.status(404).json({ message: "Bus not found" });
    return res.status(200).json(bus);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching bus" });
  }
};

const Bus = require("../Models/Buschema")
const getBusDetails = async (req, res) => {
  const busNumber = req.params.busnumber;
  console.log("Received bus number:", busNumber); // Check what bus number is received

  try {
      const bus = await Bus.findOne({ busno: busNumber });
      console.log("Bus found:", bus); // Log the result of the query
      
      if (!bus) {
          return res.status(404).json({ message: "Bus not found" });
      }
      return res.status(200).json(bus);
  } catch (error) {
      console.error("Error fetching bus details:", error);
      return res.status(500).json({ message: "Internal server error" });
  }
};
exports.getBusDetails=getBusDetails;
exports.SendBus = SendBus;
exports.FetchBus = FetchBus;
exports.updateBus = updateBus;
exports.deleteBus = deleteBus;
exports.busStop = busStop;
exports.justry=justry;
exports.getBusById=getBusById;
