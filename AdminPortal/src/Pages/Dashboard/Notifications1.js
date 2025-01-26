// import React, { useState } from "react";
// import SimpleBar from "simplebar-react";
// import { Card, CardBody, CardTitle, Col, Button } from "reactstrap";
// import { FaPaperPlane } from "react-icons/fa";

// const Notifications = () => {
//   const [inputText, setInputText] = useState("");
//   const [notifications, setNotifications] = useState([]); // Store notifications
//   const [view, setView] = useState("add"); // Control which section to show

//   // Function to handle send button click
//   const handleSendClick = () => {
//     if (inputText.trim() !== "") {
//       // Add the new notification to the list
//       setNotifications([...notifications, inputText]);
//       setInputText(""); // Clear the input field
//     }
//   };

//   return (
//     <React.Fragment>
//       <Col lg={5}>
//         <Card style={styles.cardContainer}>
//           <CardBody>
//             <div style={styles.tabButtons}>
//               {/* Buttons for Switching View */}
//               <Button
//                 color={view === "add" ? "primary" : "secondary"}
//                 onClick={() => setView("add")}
//                 style={styles.button}
//               >
//                 Add Notification
//               </Button>
//               <Button
//                 color={view === "view" ? "primary" : "secondary"}
//                 onClick={() => setView("view")}
//                 style={styles.button}
//               >
//                 View Notifications
//               </Button>
//             </div>

//             {/* Conditionally render the selected section */}
//             <div>
//               {view === "add" && (
//                 <div style={styles.section}>
//                   <CardTitle>Add Notification</CardTitle>
//                   <SimpleBar style={{ maxHeight: "287px" }}>
//                     <div style={{ position: "relative", marginBottom: "20px" }}>
//                       <input
//                         type="text"
//                         value={inputText}
//                         onChange={(e) => setInputText(e.target.value)}
//                         style={styles.inputField}
//                         placeholder="Type here"
//                       />
//                       <button
//                         type="button"
//                         className="btn btn-success"
//                         onClick={handleSendClick}
//                         style={styles.sendButton}
//                       >
//                         <FaPaperPlane />
//                       </button>
//                     </div>
//                   </SimpleBar>
//                 </div>
//               )}

//               {view === "view" && (
//                 <div style={styles.section}>
//                   <CardTitle>View Notifications</CardTitle>
//                   <SimpleBar style={{ maxHeight: "287px" }}>
//                     <ul style={styles.notificationList}>
//                       {notifications.length === 0 ? (
//                         <li>No notifications yet.</li>
//                       ) : (
//                         notifications.map((notification, index) => (
//                           <li key={index} style={styles.notificationItem}>
//                             {notification}
//                           </li>
//                         ))
//                       )}
//                     </ul>
//                   </SimpleBar>
//                 </div>
//               )}
//             </div>
//           </CardBody>
//         </Card>
//       </Col>
//     </React.Fragment>
//   );
// };

// // Internal styles
// const styles = {
//   cardContainer: {
//     width: "100%",
//     maxWidth: "650px",
//     margin: "0 auto",
//     marginBottom:"10px"
//   },
//   tabButtons: {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "20px",
//   },
//   button: {
//     marginRight: "10px",
//     minWidth: "150px",
//   },
//   section: {
//     width: "100%", // Take full width for better display
//     padding: "20px",
//   },
//   inputField: {
//     width: "100%",
//     height: "165px",
//     fontSize: "18px",
//     padding: "10px",
//     borderRadius: "8px",
//     border: "1px solid #ced4da",
//   },
//   sendButton: {
//     position: "absolute",
//     right: "10px",
//     top: "80%",
//     transform: "translateY(-50%)",
//     padding: "6px 10px",
//     borderRadius: "50%",
//   },
//   notificationList: {
//     listStyleType: "none",
//     paddingLeft: "0",
//   },
//   notificationItem: {
//     marginBottom: "10px",
//     padding: "10px",
//     borderBottom: "1px solid #ccc",
//   },
// };

// export default Notifications;








import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import { Card, CardBody, CardTitle, Col, Button } from "reactstrap";
import { FaPaperPlane } from "react-icons/fa";
import axios from 'axios'; // Import axios for HTTP requests

const Notifications = () => {
  const [inputText, setInputText] = useState("");
  const [notifications, setNotifications] = useState([]); // Store notifications
  const [view, setView] = useState("add"); // Control which section to show

  // Fetch notifications from the server on component mount or when switching to "view" tab
  const fetchNotifications = async () => {
    try {
      // Fetch the array of notifications directly from the response
      const response = await axios.get('http://localhost:9001/api/notifications');
      
      // Log the response to verify
      console.log("Full response:", response);
  
      // Assuming the response is the array of notifications itself
      if (Array.isArray(response)) {
        setNotifications(response); // Set the notifications state with the response array
      } else {
        console.warn("Expected an array, but got:", response);
        setNotifications([]); // Set an empty array if response is not an array
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
      setNotifications([]); // Handle the error by setting notifications to an empty array
    }
  };
  
  

  // Call fetchNotifications when switching to "View Notifications"
  useEffect(() => {
    if (view === "view") {
      fetchNotifications(); // Fetch notifications when the view is switched
    }
  }, [view]);

  // Function to handle send button click
  const handleSendClick = async () => {
    if (inputText.trim() !== "") {
      try {
        const response = await axios.post('http://localhost:9001/api/notifications', {
          message: inputText
        });

        // Log the backend response to ensure the correct message is received
        console.log('Notification sent:', response.data);

        // Update notifications using the actual response from the backend
        setNotifications((prev) => [
          ...prev,
          response.data,  // Assuming response.data contains the notification object (with id and message)
        ]);

        setInputText(""); // Clear the input field after sending
      } catch (error) {
        console.error('Error sending notification:', error);
      }
    }
  };

  return (
    <React.Fragment>
      <Col lg={5}>
        <Card style={styles.cardContainer}>
          <CardBody>
            <div style={styles.tabButtons}>
              <Button
                color={view === "add" ? "primary" : "secondary"}
                onClick={() => setView("add")}
                style={styles.button}
              >
                Add Notification
              </Button>
              <Button
                color={view === "view" ? "primary" : "secondary"}
                onClick={() => setView("view")}
                style={styles.button}
              >
                View Notifications
              </Button>
            </div>

            <div>
              {view === "add" && (
                <div style={styles.section}>
                  <CardTitle>Add Notification</CardTitle>
                  <SimpleBar style={{ maxHeight: "287px" }}>
                    <div style={{ position: "relative", marginBottom: "20px" }}>
                      <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        style={styles.inputField}
                        placeholder="Type here"
                      />
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleSendClick}
                        style={styles.sendButton}
                      >
                        <FaPaperPlane />
                      </button>
                    </div>
                  </SimpleBar>
                </div>
              )}

              {view === "view" && (
                <div style={styles.section}>
                  <CardTitle>View Notifications</CardTitle>
                  <SimpleBar style={{ maxHeight: "287px" }}>
                    <ul style={styles.notificationList}>
                      {notifications.length === 0 ? (
                        <li>No notifications yet.</li>
                      ) : (
                        notifications.map((notification, index) => (
                          <li key={notification.id || index} style={styles.notificationItem}>
                            {notification.message}
                          </li>
                        ))
                      )}
                    </ul>
                  </SimpleBar>
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

// Internal styles
const styles = {
  cardContainer: {
    width: "100%",
    maxWidth: "650px",
    margin: "0 auto",
    marginBottom:"10px"
  },
  tabButtons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    marginRight: "10px",
    minWidth: "150px",
  },
  section: {
    width: "100%", // Take full width for better display
    padding: "20px",
  },
  inputField: {
    width: "100%",
    height: "165px",
    fontSize: "18px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ced4da",
  },
  sendButton: {
    position: "absolute",
    right: "10px",
    top: "80%",
    transform: "translateY(-50%)",
    padding: "6px 10px",
    borderRadius: "50%",
  },
  notificationList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  notificationItem: {
    marginBottom: "10px",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
};

export default Notifications;