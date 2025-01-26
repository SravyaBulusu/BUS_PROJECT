// import React from "react";
// import { Link } from "react-router-dom";

// //SimpleBar
// import SimpleBar from "simplebar-react";


// import { Card, CardBody, CardTitle, Col } from "reactstrap";

// import { NotificationsData } from "../../CommonData/Data/index";

// const Notifications = () => {
//   return (
//     <React.Fragment>
//       <Col lg={7}>
//         <Card>
//           <CardBody>
//             <CardTitle>Notifications</CardTitle>

//             <div className="pe-3">
//               <SimpleBar style={{ maxHeight: "287px" }}>
//                 {NotificationsData.map((item, key) => (
//                   <Link key={key} to="#" className="text-body d-block">
//                     <div className="d-flex py-3">
//                       <div className="flex-shrink-0 me-3 align-self-center">
//                         {item.src ? (
//                           <img
//                             className="rounded-circle avatar-xs"
//                             alt=""
//                             src={item.src}
//                           />
//                         ) : (
//                           <div className="avatar-xs">
//                             <span className="avatar-title bg-primary-subtle rounded-circle text-primary">
//                               <i className={item.icon}></i>
//                             </span>
//                           </div>
//                         )}
//                       </div>

//                       <div className="flex-grow-1 overflow-hidden">
//                         <h5 className="font-size-14 mb-1">{item.name}</h5>
//                         <p className="text-truncate mb-0">{item.desc}</p>
//                       </div>
//                       <div className="flex-shrink-0 font-size-13">
//                         {item.time}
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </SimpleBar>
//             </div>
//           </CardBody>
//         </Card>
//       </Col>
//     </React.Fragment>
//   );
// };
// export default Notifications;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // SimpleBar
// import SimpleBar from "simplebar-react";

// import { Card, CardBody, CardTitle, Col, Button } from "reactstrap";
// import { FaPaperPlane } from "react-icons/fa"; // Import send mail icon

// import { NotificationsData } from "../../CommonData/Data/index";

// const Notifications = () => {
//   // State to manage the input field value for each notification
//   const [inputValues, setInputValues] = useState({});

//   // Function to handle input change for each notification
//   const handleInputChange = (key, value) => {
//     setInputValues({ ...inputValues, [key]: value });
//   };

//   // Function to handle sending the mail (you can implement actual send logic here)
//   const sendMail = (key) => {
//     const message = inputValues[key];
//     console.log(`Sending mail for notification ${key}: ${message}`);
//     // Reset the input field after sending
//     setInputValues({ ...inputValues, [key]: "" });
//   };

//   return (
//     <React.Fragment>
//       <Col lg={7}>
//         <Card>
//           <CardBody>
//             <CardTitle>Complaints responding</CardTitle>

//             <div className="pe-3">
//               <SimpleBar style={{ maxHeight: "287px" }}>
//                 {NotificationsData.map((item, key) => (
//                   <div key={key} className="d-block text-body">
//                     <div className="d-flex py-3">
//                       <div className="flex-grow-1 overflow-hidden">
//                         <h5 className="font-size-14 mb-1">{item.name}</h5>
//                         <p className="text-truncate mb-0">{item.desc}</p>
//                       </div>
//                       <div className="flex-shrink-0 font-size-13">
//                         {item.time}
//                       </div>
//                     </div>

//                     {/* Textbox and Send Mail button inside each notification */}
//                     <div className="d-flex align-items-center mt-2">
//                       <input
//                         type="text"
//                         className="form-control me-2"
//                         value={inputValues[key] || ""}
//                         placeholder="Type your message..."
//                         onChange={(e) => handleInputChange(key, e.target.value)}
//                       />
//                       <Button color="primary" onClick={() => sendMail(key)}>
//                         <FaPaperPlane /> {/* Send mail icon */}
//                       </Button>
//                     </div><hr></hr>
//                   </div>
//                 ))}
//               </SimpleBar>
//             </div>
//           </CardBody>
//         </Card>
//       </Col>
//     </React.Fragment>
//   );
// };

// export default Notifications;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import axios from "axios";
import { Card, CardBody, CardTitle, Col, Button } from "reactstrap";
import { FaPaperPlane } from "react-icons/fa"; 

const Notifications = () => {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get('http://localhost:9001/send-data')
      .then(result => {
        console.log(result); // Log the actual data
        setData(result); // Set the state with result.data
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch notifications."); 
      });
  }, []);

  const handle = () => {
    axios.get('http://localhost:9001/send-data')
      .then(result => {
        console.log(result); // Log the actual data
        setData(result); // Set the state with result.data
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch notifications."); 
      });
  }

  const handleDelete = (id) => {
    const i = {
      _id: id
    }
    axios.post('http://localhost:9001/del-data', i)
      .then(response => {
        console.log('Everything is fine', response); 
        handle();
      })
      .catch(err => {
        console.error('Error:', err);
      });
      handle();
  };

  if (!Array.isArray(data) || data.length === 0) {
    return(
    <React.Fragment>
        <Col lg={7}>
          <Card>
            <CardBody>
              <CardTitle>Complaints Responding</CardTitle>
              {error && <p className="text-danger">{error}</p>} {/* Display error message */}
              <div className="pe-3">
               NO Complaints
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  } else {
    console.log(data);    
    return (
      <React.Fragment>
        <Col lg={7}>
          <Card>
            <CardBody>
              <CardTitle>Complaints Responding</CardTitle>
              {error && <p className="text-danger">{error}</p>} {/* Display error message */}
              <div className="pe-3">
                <SimpleBar style={{ maxHeight: "287px" }}>
                  {data.map((item) => (
                    <div key={item.id} className="d-block text-body">
                      <div className="d-flex py-3">
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-14 mb-1">{item.busNumber}</h5>
                          <p className="text-truncate mb-0">{item.subject}</p>
                        </div>
                        <div className="flex-shrink-0 font-size-13">
                          {item.date}
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <div className="flex-shrink-0 font-size-13">
                          <div className="form-control me-2">{item.description}</div>
                        </div>
                        <Button color="danger" onClick={() => handleDelete(item._id)} aria-label="Delete notification">
                          Delete
                        </Button>
                      </div>
                      <hr />
                    </div>
                  ))}
                </SimpleBar>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default Notifications;