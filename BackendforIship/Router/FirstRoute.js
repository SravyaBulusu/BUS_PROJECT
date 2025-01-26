const express = require("express");
const {
  SendindStu,
  updateStudent,
  deleteStudent,
  Fetch,
  login,
  getStudentDetails,
  changePassword,
} = require("../Controller/Studentcontro");
const BusController = require("../Controller/Drivercon");
const Complaints=require("../Controller/complaintscontro")
const student = require("../Controller/contactcontro");

const Route = express.Router();

Route.post("/add-stu-data", SendindStu);

//Fetching Data;
Route.get("/student", Fetch);



//Updating Student Details
Route.put("/studentsupdate/:id", updateStudent);

//Deleting Studenting Details
Route.delete("/studentsdelete/:id", deleteStudent);

//Bus Related
Route.post("/add-bus", BusController.SendBus);



Route.get("/bus", BusController.FetchBus);

Route.put("/busupdate/:id", BusController.updateBus);

Route.delete("/busdelete/:id", BusController.deleteBus);

Route.put("bus/:id/add-stop", BusController.busStop);
Route.put("/update-bus/:busno",BusController.justry);
Route.get("/bus/:id",BusController.getBusById);


Route.post('/login', login);
Route.get('/getStudentDetails/:rollnumber', getStudentDetails);
Route.post('/changePassword', changePassword);
Route.get('/getBusDetails/:busnumber',BusController.getBusDetails);

// //complaints
Route.post("/com",Complaints.Complaint_data);
Route.get("/send-data",Complaints.Send_Data);
Route.post("/del-data",Complaints.Delete_Data);
Route.post("/send-mail",student.mailSender);




module.exports = Route;
