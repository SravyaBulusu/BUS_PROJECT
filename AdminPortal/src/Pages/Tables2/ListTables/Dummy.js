import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  ModalHeader,
} from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import { Link } from "react-router-dom";
import List from "list.js";
// Import Flatepicker
import Flatpickr from "react-flatpickr";

// Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";

const ListTables = () => {
  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
    setmodal_list(!modal_list);
  }

  const [modal_delete, setmodal_delete] = useState(false);
  function tog_delete() {
    setmodal_delete(!modal_delete);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Tables" breadcrumbItem="Listjs" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Add, Edit & Remove</h4>
                </CardHeader>

                <CardBody>
                  <div id="customerList">
                    <Row className="g-4 mb-3">
                      <Col className="col-sm-auto">
                        <div className="d-flex gap-1">
                          <Button
                            color="success"
                            className="add-btn"
                            onClick={() => tog_list()}
                            id="create-btn"
                          >
                            <i className="ri-add-line align-bottom me-1"></i>{" "}
                            Add
                          </Button>
                          <Button
                            color="soft-danger"
                            // onClick="deleteMultiple()"
                          >
                            <i className="ri-delete-bin-2-line"></i>
                          </Button>
                        </div>
                      </Col>
                      <Col className="col-sm">
                        <div className="d-flex justify-content-sm-end">
                          <div className="search-box ms-2">
                            <input
                              type="text"
                              className="form-control search"
                              placeholder="Search..."
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className="table-responsive table-card mt-3 mb-1">
                      <table
                        className="table align-middle table-nowrap"
                        id="customerTable"
                      >
                        <thead className="table-light">
                          <tr>
                            <th scope="col" style={{ width: "50px" }}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkAll"
                                  value="option"
                                />
                              </div>
                            </th>
                            <th className="sort" data-sort="name">
                              Name
                            </th>
                            <th className="sort" data-sort="password">
                              Password
                            </th>
                            <th className="sort" data-sort="roll">
                              Roll Number
                            </th>
                            <th className="sort" data-sort="busno">
                              Bus Number
                            </th>
                            <th className="sort" data-sort="email">
                              Email
                            </th>
                            <th className="sort" data-sort="department">
                              Department{" "}
                            </th>
                            <th className="sort" data-sort="campus">
                              Campus
                            </th>
                            <th className="sort" data-sort="course">
                              Course
                            </th>
                            <th className="sort" data-sort="phone">
                              Phone Number
                            </th>
                            <th className="sort" data-sort="route">
                              Route
                            </th>
                            <th className="sort" data-sort="year">
                              Year
                            </th>
                            <th className="sort" data-sort="action">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="chk_child"
                                  value="option1"
                                />
                              </div>
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <Link to="#" className="fw-medium link-primary">
                                #VZ2101
                              </Link>
                            </td>
                            <td className="name">Mary Cousar</td>
                            <td className="password">********</td>
                            <td className="roll">22A91A05K0</td>
                            <td className="busno">Bus-1</td>
                            <td className="email">marycousar@velzon.com</td>
                            <td className="department">Computer Science</td>
                            <td className="campus">Main Campus</td>
                            <td className="course">B.Tech</td>
                            <td className="phone">580-464-4694</td>
                            <td className="route">Route A</td>
                            <td className="year">2023</td>
                            <td>
                              <div className="d-flex gap-2">
                                <div className="edit">
                                  <button
                                    className="btn btn-sm btn-success edit-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#showModal"
                                  >
                                    Edit
                                  </button>
                                </div>
                                <div className="remove">
                                  <button
                                    className="btn btn-sm btn-danger remove-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteRecordModal"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkAll"
                                  value="option2"
                                />
                              </div>
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <Link to="#" className="fw-medium link-primary">
                                #VZ2102
                              </Link>
                            </td>
                            <td className="name">Mary Cousar</td>
                            <td className="password">********</td>
                            <td className="roll">22A91A05K0</td>
                            <td className="busno">Bus-1</td>
                            <td className="email">marycousar@velzon.com</td>
                            <td className="department">Computer Science</td>
                            <td className="campus">Main Campus</td>
                            <td className="course">B.Tech</td>
                            <td className="phone">580-464-4694</td>
                            <td className="route">Route A</td>
                            <td className="year">2023</td>
                            <td>
                              <div className="d-flex gap-2">
                                <div className="edit">
                                  <button
                                    className="btn btn-sm btn-success edit-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#showModal"
                                  >
                                    Edit
                                  </button>
                                </div>
                                <div className="remove">
                                  <button
                                    className="btn btn-sm btn-danger remove-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteRecordModal"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="noresult" style={{ display: "none" }}>
                        <div className="text-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/msoeawqm.json"
                            trigger="loop"
                            colors="primary:#121331,secondary:#08a88a"
                            style={{ width: "75px", height: "75px" }}
                          ></lord-icon>
                          <h5 className="mt-2">Sorry! No Result Found</h5>
                          <p className="text-muted mb-0">
                            We've searched more than 150+ Orders We did not find
                            any orders for you search.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <div className="pagination-wrap hstack gap-2">
                        <Link
                          className="page-item pagination-prev disabled"
                          to="#"
                        >
                          Previous
                        </Link>
                        <ul className="pagination listjs-pagination mb-0"></ul>
                        <Link className="page-item pagination-next" to="#">
                          Next
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Add Modal */}
      <Modal
        isOpen={modal_list}
        toggle={() => {
          tog_list();
        }}
        centered
      >
        <ModalHeader
          className="bg-light p-3"
          id="exampleModalLabel"
          toggle={() => {
            tog_list();
          }}
        >
          {" "}
          Add Customer{" "}
        </ModalHeader>
        <form className="tablelist-form">
          <ModalBody>
            <div className="mb-3" id="modal-id" style={{ display: "none" }}>
              <label htmlFor="id-field" className="form-label">
                ID
              </label>
              <input
                type="text"
                id="id-field"
                className="form-control"
                placeholder="ID"
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name-field" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name-field"
                className="form-control"
                placeholder="Enter Name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password-field" className="form-label">
                Password
              </label>
              <input
                type="text"
                id="password-field"
                className="form-control"
                placeholder="Enter Default Password"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="roll-field" className="form-label">
                Roll Number
              </label>
              <input
                type="text"
                id="roll-field"
                className="form-control"
                placeholder="Enter Roll Number"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="bus-no-field" className="form-label">
                Bus Number
              </label>
              <input
                type="text"
                id="bus-no-field"
                className="form-control"
                placeholder="Enter Bus Number"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email-field" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email-field"
                className="form-control"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="department-field" className="form-label">
                Department
              </label>
              <input
                type="text"
                id="department-field"
                className="form-control"
                placeholder="Enter Department"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="campus-field" className="form-label">
                Campus
              </label>
              <input
                type="text"
                id="campus-field"
                className="form-control"
                placeholder="Enter Campus"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="course-field" className="form-label">
                Course
              </label>
              <input
                type="text"
                id="course-field"
                className="form-control"
                placeholder="EnterCourse"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone-field" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                id="phone-field"
                className="form-control"
                placeholder="Enter Phone Number"
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
                placeholder="Enter route"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="year-field" className="form-label">
                Year
              </label>
              <input
                type="text"
                id="year-field"
                className="form-control"
                placeholder="Enter Year"
                required
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="hstack gap-2 justify-content-end">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setmodal_list(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-success" id="add-btn">
                Add Student
              </button>
              {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
            </div>
          </ModalFooter>
        </form>
      </Modal>

      {/* Remove Modal */}
      <Modal
        isOpen={modal_delete}
        toggle={() => {
          tog_delete();
        }}
        className="modal fade zoomIn"
        id="deleteRecordModal"
        centered
      >
        <div className="modal-header">
          <Button
            type="button"
            onClick={() => setmodal_delete(false)}
            className="btn-close"
            aria-label="Close"
          >
            {" "}
          </Button>
        </div>
        <ModalBody>
          <div className="mt-2 text-center">
            <lord-icon
              src="https://cdn.lordicon.com/gsqxdxog.json"
              trigger="loop"
              colors="primary:#f7b84b,secondary:#f06548"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
              <h4>Are you Sure ?</h4>
              <p className="text-muted mx-4 mb-0">
                Are you Sure You want to Remove this Record ?
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <button
              type="button"
              className="btn w-sm btn-light"
              onClick={() => setmodal_delete(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn w-sm btn-danger "
              id="delete-record"
            >
              Yes, Delete It!
            </button>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default ListTables;
