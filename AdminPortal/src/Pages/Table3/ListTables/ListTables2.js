import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";

const ListBuses = () => {
  const API_URL = "http://localhost:9001";

  const [buses, setBuses] = useState([]);
  const [modalList, setModalList] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editBus, setEditBus] = useState(null);
  
  const [modal_delete, setModalDelete] = useState(false);
  const [busToDelete, setBusToDelete] = useState(null);

  const [newBus, setNewBus] = useState({
    busno: "",
    bustartingtime: "",
    busroute: "",
    busground: "",
    buscapacity: "",
    drivername: "",
    driverphone: "",
    driverphoto: "",
    stops: [],
    address: {
      OriginalAddress: "",
      DestinationAddress: "",
      Distance: "",
      Duration: "",
    },
  });

  function tog_list() {
    setModalList(!modalList);
  }

  

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await axios.get(`${API_URL}/bus`);
      setBuses(response);
    } catch (error) {
      console.error("Error fetching buses", error);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("stop")) {
      const index = Number(name.split("-")[1]);
      const updatedStops = [...newBus.stops];
      updatedStops[index] = {
        ...updatedStops[index],
        [name.split("-")[0]]: value,
      };
      setNewBus({ ...newBus, stops: updatedStops });
    } else if (name.includes("address")) {
      const field = name.split(".")[1];
      setNewBus({
        ...newBus,
        address: { ...newBus.address, [field]: value },
      });
    } else {
      setNewBus({ ...newBus, [name]: value });
    }
  };

  const handleAddStop = () => {
    const updatedStops = [...newBus.stops, { stopname: "", stoptime: "" }];
    setNewBus({ ...newBus, stops: updatedStops });
  };

  const handleAddBus = async () => {
    try {
      const response = await axios.post(`${API_URL}/add-bus`, newBus);
      if (response.status === 201) {
        setModalList(false);
        setBuses((prevBuses) => [...prevBuses, response]);
        resetBusForm();
      }
    } catch (error) {
      console.error("Error adding bus", error);
    }
  };

  const resetBusForm = () => {
    setNewBus({
      busno: "",
      bustartingtime: "",
      busroute: "",
      busground: "",
      buscapacity: "",
      drivername: "",
      driverphone: "",
      driverphoto: "",
      stops: [],
      address: {
        OriginalAddress: "",
        DestinationAddress: "",
        Distance: "",
        Duration: "",
      },
    });
  };

  const handleEditBus = (bus) => {
    setEditBus(bus);
    setNewBus(bus); 
    setIsEditing(true);
    setModalList(true);
  };

  const handleUpdateBus = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/busupdate/${editBus._id}`,
        newBus
      );
      if (response.status === 200) {
        setModalList(false);
        setBuses((prevBuses) =>
          prevBuses.map((bus) => (bus._id === editBus._id ? newBus : bus))
        );
        resetBusForm();
        setIsEditing(false);
        setEditBus(null);
      }
    } catch (error) {
      console.error("Error updating bus", error);
    }
  };

  const tog_delete = () => {
    setModalDelete(!modal_delete);
  };

  const handleDeleteClick = async () => {
    if (busToDelete) {
      try {
        const response = await axios.delete(`${API_URL}/busdelete/${busToDelete}`);
        if (response.status === 200) {
          setBuses((prevBuses) => prevBuses.filter(bus => bus._id !== busToDelete));
          tog_delete();
        } else {
          console.log("Failed To Delete Bus, Try again later");
        }
      } catch (error) {
        console.error("Error deleting bus:", error);
      }
    }
  };

  const confirmDeleteBus = (busId) => {
    setBusToDelete(busId);
    tog_delete();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Bus Information</h4>
                </CardHeader>
                <CardBody>
                  <Row className="g-4 mb-3">
                    <Col className="col-sm-auto">
                      <Button
                        color="primary"
                        className="add-btn"
                        onClick={() => {
                          setModalList(true);
                          setIsEditing(false);
                          resetBusForm();
                        }}
                      >
                        <i className="ri-add-line align-bottom me-1"></i> Add Bus
                      </Button>
                    </Col>
                  </Row>
                  <div className="table-responsive table-card mt-3 mb-1">
                    <table className="table align-middle table-nowrap">
                      <thead className="table-light">
                        <tr>
                          <th>Bus Number</th>
                          <th>Starting Time</th>
                          <th>Route</th>
                          <th>Ground</th>
                          <th>Capacity</th>
                          <th>Stops</th>
                          <th>Address</th>
                          <th>Driver Name</th>
                          <th>Driver Phone</th>
                          <th>Driver Photo</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {buses.length > 0 ? (
                          buses.map((bus) => (
                            <tr key={bus._id}>
                              <td>{bus.busno}</td>
                              <td>{bus.bustartingtime}</td>
                              <td>{bus.busroute}</td>
                              <td>{bus.busground}</td>
                              <td>{bus.buscapacity}</td>
                              <td>
                                {bus.stops.map((stop, index) => (
                                  <div key={index}>
                                    {stop.stopname} at {stop.stoptime}
                                  </div>
                                ))}
                              </td>
                              <td>
                                <div>{bus.address.OriginalAddress}</div>
                                <div>{bus.address.DestinationAddress}</div>
                              </td>
                              <td>{bus.drivername}</td>
                              <td>{bus.driverphone}</td>
                              <td>
                                <img
                                  src={bus.driverphoto}
                                  alt={bus.drivername}
                                  style={{ width: "50px", height: "50px" }}
                                />
                              </td>
                              <td>
                                <Button
                                  className="btn btn-sm btn-success"
                                  style={{ marginRight: "10px" }}
                                  onClick={() => handleEditBus(bus)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => confirmDeleteBus(bus._id)}
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="10" className="text-center">
                              No buses available
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

      <Modal isOpen={modalList} toggle={() => setModalList(false)}>
        <ModalHeader toggle={() => setModalList(false)}>
          {isEditing ? "Edit Bus" : "Add Bus"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="busno">Bus Number</Label>
              <Input
                type="text"
                name="busno"
                value={newBus.busno}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="bustartingtime">Starting Time</Label>
              <Input
                type="time"
                name="bustartingtime"
                value={newBus.bustartingtime}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="busroute">Route</Label>
              <Input
                type="text"
                name="busroute"
                value={newBus.busroute}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="busground">Ground</Label>
              <Input
                type="text"
                name="busground"
                value={newBus.busground}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="buscapacity">Capacity</Label>
              <Input
                type="number"
                name="buscapacity"
                value={newBus.buscapacity}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="drivername">Driver Name</Label>
              <Input
                type="text"
                name="drivername"
                value={newBus.drivername}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="driverphone">Driver Phone</Label>
              <Input
                type="text"
                name="driverphone"
                value={newBus.driverphone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="driverphoto">Driver Photo URL</Label>
              <Input
                type="url"
                name="driverphoto"
                value={newBus.driverphoto}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="stops">Stops</Label>
              {newBus.stops.map((stop, index) => (
                <div key={index} className="d-flex mb-2">
                  <Input
                    type="text"
                    name={`stopname-${index}`}
                    placeholder="Stop Name"
                    value={stop.stopname}
                    onChange={handleChange}
                    className="me-2"
                    required
                  />
                  <Input
                    type="time"
                    name={`stoptime-${index}`}
                    placeholder="Stop Time"
                    value={stop.stoptime}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => {
                      const updatedStops = newBus.stops.filter((_, i) => i !== index);
                      setNewBus({ ...newBus, stops: updatedStops });
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                className="btn btn-primary btn-sm"
                onClick={handleAddStop}
              >
                Add Stop
              </Button>
            </FormGroup>
            <FormGroup>
              <Label for="address.OriginalAddress">Original Address</Label>
              <Input
                type="text"
                name="address.OriginalAddress"
                value={newBus.address.OriginalAddress}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address.DestinationAddress">Destination Address</Label>
              <Input
                type="text"
                name="address.DestinationAddress"
                value={newBus.address.DestinationAddress}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address.Distance">Distance</Label>
              <Input
                type="text"
                name="address.Distance"
                value={newBus.address.Distance}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address.Duration">Duration</Label>
              <Input
                type="text"
                name="address.Duration"
                value={newBus.address.Duration}
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={isEditing ? handleUpdateBus : handleAddBus}
          >
            {isEditing ? "Update Bus" : "Add Bus"}
          </Button>
          <Button color="secondary" onClick={() => setModalList(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal_delete} toggle={tog_delete}>
        <ModalHeader toggle={tog_delete}>
          Delete Confirmation
        </ModalHeader>
        <ModalBody>
          Are you sure you want to delete this bus?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDeleteClick}>
            Delete
          </Button>
          <Button color="secondary" onClick={tog_delete}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ListBuses;
