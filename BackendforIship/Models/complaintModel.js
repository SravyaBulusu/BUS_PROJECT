const express = require('express');
const mongoose = require('mongoose');
const Complaints = new mongoose.Schema({
    busNumber: {
        type : Number
    },
    subject : {
        type : String
    },
    description : {
        type : String
    },
    date : {
        type : String
    }
});
module.exports = mongoose.model("Comdb",Complaints);