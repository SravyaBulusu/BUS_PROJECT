import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  ModalHeader,
} from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import axios from "axios";
import * as XLSX from "xlsx";

const ListTables = () => {
  const API_URL = "http://localhost:9001";

  // Toggle Hook ->adeyy edit->update->delete ->rel

  const [modal_list, setmodal_list] = useState(false);
  const [modal_delete, setmodal_delete] = useState(false);

  //Updates Data
  const [students, setStudents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [deleteStudentId, setDeleteStudentId] = useState(null);

  //Forms Related For Drop down
  const [availableDepartments, setAvailableDepartments] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [availableCampuses, setAvailableCampuses] = useState([]);

  const courseOptions = {
    "B.Tech": {
      departments: ["CSE", "ECE", "EEE", "MECH", "CIVIL","AIML","DS","AGRICULTURE","MINING","PETROLEUM"],
      years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
      campuses: ["Aditya University", "ACET"],
    },
    "M.Tech": {
      departments: ["CSE", "ECE", "EEE", "MECH", "CIVIL","AIML","DS","AGRICULTURE","MINING","PETROLEUM"],
      years: ["1st Year", "2nd Year"],
      campuses: ["Campus 1", "Campus 2"],
    },
    MBA: {
      departments: ["Finance", "Marketing", "HR", "Operations"],
      years: ["1st Year", "2nd Year"],
      campuses: ["Campus 1", "Campus 2","Campus 3"],
    },
    BBA: {
      departments: ["Business", "Economics", "Accounting"],
      years: ["1st Year", "2nd Year", "3rd Year"],
      campuses: ["Campus 1", "Campus 2","Campus 3"],
    },
  };

  //Functions Related To Toggle
  function tog_list() {
    setmodal_list(!modal_list);
  }

  function tog_delete(studentId = null) {
    setmodal_delete(!modal_delete);
    setDeleteStudentId(studentId);
  }

  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    busno: "",
    password: "",
    email: "",
    department: "",
    campus: "",
    course: "",
    phoneno: "",
    routeind: "",
    year: "",
    gender: "",
  });

  const handleEditClick = (student) => {
    setIsEditing(true);
    setEditingStudentId(student._id);
    setFormData({
      name: student.name,
      rollno: student.rollno,
      busno: student.busno,
      password: student.password,
      email: student.email,
      department: student.department,
      campus: student.campus,
      course: student.course,
      phoneno: student.phoneno,
      routeind: student.routeind,
      year: student.year,
      gender: student.gender,
    });
   

    const selectedCourse = courseOptions[student.course];
  setAvailableDepartments(selectedCourse ? selectedCourse.departments : []);
  setAvailableYears(selectedCourse ? selectedCourse.years : []);
  setAvailableCampuses(selectedCourse ? selectedCourse.campuses : []);
  
  setmodal_list(true);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API_URL}/student`);
      setStudents(response);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "course") {
      const selectedCourse = courseOptions[value];
      setAvailableDepartments(selectedCourse ? selectedCourse.departments : []);
      setAvailableYears(selectedCourse ? selectedCourse.years : []);
      setAvailableCampuses(selectedCourse ? selectedCourse.campuses : []);
    }
  };

  const handleDeleteClick = async () => {
    if (!deleteStudentId) return;

    try {
      await axios.delete(`${API_URL}/studentsdelete/${deleteStudentId}`);
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== deleteStudentId)
      );
      setmodal_delete(false);
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      try {
        const response = await axios.put(
          `${API_URL}/studentsupdate/${editingStudentId}`,
          formData
        );
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student._id === editingStudentId
              ? { ...student, ...formData }
              : student
          )
        );
        setIsEditing(false);
        setEditingStudentId(null);
        setmodal_list(false);
      } catch (error) {
        console.error("Error updating student", error);
      }
    } else {
      try {
        const response = await axios.post(`${API_URL}/add-stu-data`, formData);
        setStudents((prevStudents) => [...prevStudents, response.data]); // Add new student to state
        setmodal_list(false);
      } catch (error) {
        console.error("Error adding student", error);
      }
    }

    setFormData({
      name: "",
      rollno: "",
      busno: "",
      password: "",
      email: "",
      department: "",
      campus: "",
      course: "",
      phoneno: "",
      routeind: "",
      year: "",
      gender: "",
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
  
      try {
       
        const response = await axios.post(`${API_URL}/add-stu-data`, jsonData);
  
       
        const addedStudents = response.data;
  
     
        setStudents((prevStudents) => [...prevStudents, ...addedStudents]);
  
        alert("Students added successfully!");
      } catch (error) {
        console.error("Error uploading students", error);
      }
    };
  
    reader.readAsArrayBuffer(file);
  };
  

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumbs title="Tables" breadcrumbItem="Listjs" /> */}
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Student Information</h4>
                </CardHeader>
                <CardBody>
                  <Row className="g-4 mb-3">
                    <Col className="col-sm-auto">
                      <div className="d-flex gap-1">
                        <Button
                          color="primary"
                          className="add-btn"
                          onClick={() => setmodal_list(true)}
                          style={{
                            height: "35px",
                            padding: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                        </Button>

                        <input
                          type="file"
                          accept=".xlsx, .xls"
                          onChange={handleFileUpload}
                          style={{ marginLeft:"50px",height:"50px",width:"100px", position:'relative', top:"10px",backgroundColor:"primary"}}
                          id="upload-input"
                        />
                        <label htmlFor="upload-input">
                          <Button color="primary" className="upload-btn" style={{}}>
                            <i className="ri-upload-line align-bottom me-1"></i>{" "}
                            Upload
                          </Button>
                        </label>

                        {/* <Button
                          type="file"
                          accept=".xlsx, .xls"
                          color="success"
                          className="add-btn"
                          onClick={handleFileUpload}
                          id="upload-input"
                        >
                          <i className="ri-upload-line align-bottom me-1"></i>Upload
                        </Button> */}
                      </div>
                    </Col>
                  </Row>
                  <div className="table-responsive table-card mt-3 mb-1">
                    <table className="table align-middle table-nowrap">
                      <thead className="table-light">
                        <tr>
                          <th>Name</th>
                          <th>Roll Number</th>
                          <th>Bus Number</th>
                          <th>Password</th>
                          <th>Email</th>
                          <th>Department</th>
                          <th>Campus</th>
                          <th>Course</th>
                          <th>Phone Number</th>
                          <th>Route</th>
                          <th>Year</th>
                          <th>Gender</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.length > 0 ? (
                          students.map((student) => (
                            <tr key={student._id}>
                              <td>{student.name}</td>
                              <td>{student.rollno}</td>
                              <td>{student.busno}</td>
                              <td>{student.password}</td>
                              <td>{student.email}</td>
                              <td>{student.department}</td>
                              <td>{student.campus}</td>
                              <td>{student.course}</td>
                              <td>{student.phoneno}</td>
                              <td>{student.routeind}</td>
                              <td>{student.year}</td>
                              <td>{student.gender}</td>
                              <td>
                                <button
                                  className="btn btn-sm btn-success"
                                  style={{marginRight:"10px"}}
                                  onClick={() => handleEditClick(student)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => tog_delete(student._id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="text-center">
                              No students found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal isOpen={modal_list} toggle={() => setmodal_list(false)} centered>
        <ModalHeader
          className="bg-light p-3"
          toggle={() => setmodal_list(false)}
        >
          {isEditing ? "Edit Student" : "Add Student"}
        </ModalHeader>
        <form className="tablelist-form" onSubmit={handleSubmit}>
          <ModalBody>

          <div className="mb-3">
              <label htmlFor="name-field" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name-field"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="rollno-field" className="form-label">
                Roll Number
              </label>
              <input
                type="text"
                id="rollno-field"
                className="form-control"
                placeholder="Enter Roll Number"
                name="rollno"
                value={formData.rollno}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password-field" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password-field"
                className="form-control"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>



            {/* Course Dropdown */}
            <div className="mb-3">
              <label htmlFor="course-field" className="form-label">
                Course
              </label>
              <select
                id="course-field"
                className="form-control"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Course</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="MBA">MBA</option>
                <option value="BBA">BBA</option>
              </select>
            </div>

            {/* Department Dropdown (conditional based on course) */}
            <div className="mb-3">
              <label htmlFor="department-field" className="form-label">
                Department
              </label>
              <select
                id="department-field"
                className="form-control"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Department</option>
                {availableDepartments.map((department, index) => (
                  <option key={index} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Dropdown (conditional based on course) */}
            <div className="mb-3">
              <label htmlFor="year-field" className="form-label">
                Year
              </label>
              <select
                id="year-field"
                className="form-control"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Year</option>
                {availableYears.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Campus Dropdown (conditional based on course) */}
            <div className="mb-3">
              <label htmlFor="campus-field" className="form-label">
                Campus
              </label>
              <select
                id="campus-field"
                className="form-control"
                name="campus"
                value={formData.campus}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Campus</option>
                {availableCampuses.map((campus, index) => (
                  <option key={index} value={campus}>
                    {campus}
                  </option>
                ))}
              </select>
            </div>

            {/* Other Form Fields */}
           

           
            <div className="mb-3">
              <label htmlFor="phone-field" className="form-label">
                Phone
              </label>
              <input
                type="text"
                id="phone-field"
                className="form-control"
                name="phoneno"
                placeholder="Enter Phone no."
                value={formData.phoneno}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email-field" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="email-field"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="bus-field" className="form-label">
                Bus No
              </label>
              <input
                type="text"
                id="bus-field"
                className="form-control"
                name="busno"
                placeholder="Enter Bus Number"
                value={formData.busno}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="route-field" className="form-label">
                Route
              </label>
              <input
                type="text"
                id="route-field"
                className="form-control"
                name="routeind"
                placeholder="Enter Route"
                value={formData.routeind}
                onChange={handleInputChange}
                required
              />
            </div>


            


            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div>
                <input
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleInputChange}
                />
                <label htmlFor="gender-male" className="ms-1">
                  Male
                </label>

                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleInputChange}
                  className="ms-3"
                />
                <label htmlFor="gender-female" className="ms-1">
                  Female
                </label>
              </div>
            </div>

           
          </ModalBody>

          <ModalFooter>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setmodal_list(false)}
            >
              Close
            </button>
            <button type="submit" className="btn btn-success">
              {isEditing ? "Update Student" : "Add Student"}
            </button>
          </ModalFooter>
        </form>
      </Modal>

      <Modal
        isOpen={modal_delete}
        toggle={() => {
          tog_delete();
        }}
        centered
      >
        <ModalHeader toggle={() => tog_delete()}>Confirm Deletion</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this student record?
        </ModalBody>
        <ModalFooter>
          <Button
            color="light"
            onClick={() => {
              tog_delete();
            }}
          >
            Cancel
          </Button>
          <Button
            color="danger"
            onClick={() => {
              handleDeleteClick();
            }}
          >
            Yes, Delete It!
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ListTables;
