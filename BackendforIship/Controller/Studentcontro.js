const express = require("express");
const mongoose = require("mongoose");
const Mydb = require("../Models/Studentschema");


const SendindStu = async (req, res) => {
  try {
    let data = req.body;
    console.log(data);

    if (!Array.isArray(data)) {
      data = [data];
    }

    const roll = data.map((student) => student.rollno);

    const existu = await Mydb.find({ rollno: { $in: roll } });
    const exirol = existu.map((student) => student.rollno);

    const uniquestu = data.filter(
      (student) => !exirol.includes(student.rollno)
    );

    if (uniquestu.length > 0) {
      await Mydb.insertMany(uniquestu);
      return res.status(200).json({
        message: "Successfully added unique student records",
        addedRecords: uniqueStudents.length,
        skippedRecords: data.length - uniqueStudents.length,
      });
    } else {
      return res.status(400).json({
        message: "No new records added. All student records already exist",
        addedRecords: 0,
        skippedRecords: data.length,
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;

    const updatedStudent = await Mydb.findByIdAndUpdate(
      studentId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: "Error updating student" });
  }
};

// Delete
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Mydb.findByIdAndDelete(id);

    if (deletedStudent) {
      return res.status(200).json({ message: "Student deleted successfully" });
    } else {
      return res.status(404).json({ message: "Student not found" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

//Fetch
const Fetch = async (req, res) => {
  try {
    const student = await Mydb.find();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Login function
const login = async (req, res) => {
  const { rollno, password } = req.body;

  try {
      // Fetch the user from the database using the rollno
      const user = await Mydb.findOne({ rollno: rollno });

      // Check if the user exists
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Directly compare the provided password with the stored password
      if (password !== user.password) {
          return res.status(400).json({ message: "Password incorrect, try again" });
      }

      // If login is successful, return success response
      res.status(200).json({ message: "Login successful", user });

  } catch (error) {
      console.error(error); // Log any errors to the console
      res.status(500).json({ message: "Server error" }); // Return a server error response
  }
};


const getStudentDetails = async (req, res) => {
  try {
      const rollnumber = req.params.rollnumber; // Make sure you're using the correct parameter
      const student = await Mydb.findOne({ rollno: rollnumber}); // Adjust the query based on your database schema

      if (!student) {
          return res.status(404).json({ message: 'Student not found' });
      }

      res.json(student);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve student details' });
  }
};

const changePassword = async (req, res) => {
  const { rollno, currentPassword, newPassword } = req.body;
  
  try {
      const student = await Mydb.findOne({ rollno });
      
      if (!student) {
          return res.status(404).json({ message: 'Student not found' });
      }

      // Check if current password matches
      if (student.password !== currentPassword) {
          return res.status(400).json({ message: 'Current password is incorrect' });
      }

      // Change password
      student.password = newPassword;
      await student.save();

      res.json({ message: 'Password changed successfully' });
  } catch (error) {
      console.error('Error changing password:', error);
      res.status(500).json({ message: 'Server error' });
  }
};

exports.changePassword = changePassword;

exports.login=login;
exports.getStudentDetails=getStudentDetails;

exports.SendindStu = SendindStu;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
exports.Fetch = Fetch;
