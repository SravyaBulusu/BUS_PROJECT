const express = require('express');
const Comdb = require('../Models/complaintModel');
const Send_To_Frontend = async(req,res) => {
    try {
        const data = await Comdb.find();
        if (data.length === 0) {
            return res.status(200).json("NO complaints today");
        }
        return res.status(200).json(data);
    } catch (err) {
        return res.status(404).json(err);
    }
}
const Delete_Data = async (req, res) => {
    const d = req.body; 
    console.log(d);
    try {
        const result = await Comdb.deleteOne(d);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
}
const Complaint_data = async (req, res) => {
    const sdata = req.body; 
    var x = new Date();
    var c = parseInt(x.getMonth())+1;
    var d = x.getDate()+"-"+c+'-'+x.getFullYear();
    sdata['date'] = d;
     try{
        var m = new Comdb(sdata);
        m.save();
        return res.status(201).json("record added")
    }
    catch(err){
        return res.status(500).json(err);
    }
}
exports.Complaint_data = Complaint_data;
exports.Send_Data = Send_To_Frontend;
exports.Delete_Data = Delete_Data;