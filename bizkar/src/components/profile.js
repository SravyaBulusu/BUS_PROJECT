// import React, { Component } from 'react';

// class Profile extends Component {
//     state = {
//         activeTab: 'student', // State to manage which tab is active
//         currentPassword: '',
//         newPassword: '',
//         confirmNewPassword: '',
//         errorMessage: '',
//     };

//     // Function to handle tab switching
//     handleTabSwitch = (tab) => {
//         this.setState({ activeTab: tab });
//     };

//     // Handle input changes in the password modal
//     handleInputChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     // Handle password change submission
//     handlePasswordSubmit = (e) => {
//         e.preventDefault();
//         const { currentPassword, newPassword, confirmNewPassword } = this.state;

//         // Basic password validation (you can extend it)
//         if (newPassword !== confirmNewPassword) {
//             this.setState({ errorMessage: 'New password and confirm password do not match!' });
//             return;
//         }

//         // Simulating password change (you can replace this with API call)
//         console.log('Password successfully changed');
//         this.setState({ 
//             currentPassword: '', 
//             newPassword: '', 
//             confirmNewPassword: '', 
//             errorMessage: '' 
//         });
//     };

//     render() {
//         const { activeTab, currentPassword, newPassword, confirmNewPassword, errorMessage } = this.state;

//         return (
//             <div className="profile-body-container">
//                 {/* Apply background to this div */}
//                 <div className="profile-container-pro">
//                     {/* Left Profile Card */}
//                     <div className="profile-left-side">
//                         <div className="profile-card-pro">
//                             <img 
//                                 src={process.env.PUBLIC_URL + '/assets/images/testimonials/testimonial-2-2.png'} 
//                                 alt="Profile Icon" 
//                                 className="profile-pic-pro" 
//                             />
//                             <h3>DIVYA</h3>
//                             <p>Student</p>

//                             <div className="stats-pro">
//                                 <p><strong>Roll No:</strong> 123456</p>
//                                 <p><strong>Bus No:</strong> 111</p>
//                             </div>

//                             <button className="view-profile-btn-pro">Live Tracking</button>
//                         </div>
//                     </div>

//                     {/* Right Section */}
//                     <div className="profile-right-side">
//                         {/* Tabs for switching between details */}
//                         <div className="tabs-pro">
//                             <button 
//                                 className={`tab-btn-pro ${activeTab === 'student' ? 'active' : ''}`} 
//                                 onClick={() => this.handleTabSwitch('student')}
//                             >
//                                 Student Details
//                             </button>
//                             <button 
//                                 className={`tab-btn-pro ${activeTab === 'bus' ? 'active' : ''}`} 
//                                 onClick={() => this.handleTabSwitch('bus')}
//                             >
//                                 Bus Details
//                             </button>
//                             <button 
//                                 className={`tab-btn-pro ${activeTab === 'password' ? 'active' : ''}`} 
//                                 onClick={() => this.handleTabSwitch('password')}
//                             >
//                                 Change Password
//                             </button>
//                         </div>

//                         {/* Conditional rendering based on active tab */}
//                         {activeTab === 'student' && (
//                             <div className="profile-details-form">
//                                 <div className="profile-section-pro">
//                                     <h4>Student Details</h4>
//                                     <form>
//                                         <div className="form-group-pro">
//                                             <label>Student Name</label>
//                                             <input type="text" value="John Doe" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Roll Number</label>
//                                             <input type="text" value="123456" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Email</label>
//                                             <input type="email" value="john.doe@example.com" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Campus</label>
//                                             <input type="text" value="ABC Campus" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Phone Number</label>
//                                             <input type="text" value="+1234567890" readOnly />
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         )}

//                         {activeTab === 'bus' && (
//                             <div className="profile-details-form">
//                                 <div className="profile-section-pro">
//                                     <h4>Bus Details</h4>
//                                     <form>
//                                         <div className="form-group-pro">
//                                             <label>Bus Number</label>
//                                             <input type="text" value="Bus 123" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Bus Starting Time</label>
//                                             <input type="text" value="7:30 AM" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Bus Route</label>
//                                             <input type="text" value="Route 1" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Bus Ground</label>
//                                             <input type="text" value="Central Bus Ground" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Driver Name</label>
//                                             <input type="text" value="John Smith" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Driver Phone Number</label>
//                                             <input type="text" value="+1234567890" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Live Tracking</label>
//                                             <div className="live-tracking-placeholder">
//                                                 <p>Live tracking will be available soon...</p>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         )}

//                         {activeTab === 'password' && (
//                             <div className="profile-details-form">
//                                 <div className="profile-section-pro">
//                                     <h4>Change Password</h4>
//                                     <form onSubmit={this.handlePasswordSubmit}>
//                                         <div className="form-group-pro">
//                                             <label>Current Password</label>
//                                             <input 
//                                                 type="password" 
//                                                 name="currentPassword" 
//                                                 value={currentPassword} 
//                                                 onChange={this.handleInputChange} 
//                                                 required 
//                                             />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>New Password</label>
//                                             <input 
//                                                 type="password" 
//                                                 name="newPassword" 
//                                                 value={newPassword} 
//                                                 onChange={this.handleInputChange} 
//                                                 required 
//                                             />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Confirm New Password</label>
//                                             <input 
//                                                 type="password" 
//                                                 name="confirmNewPassword" 
//                                                 value={confirmNewPassword} 
//                                                 onChange={this.handleInputChange} 
//                                                 required 
//                                             />
//                                         </div>

//                                         {errorMessage && <p className="error-message">{errorMessage}</p>}

//                                         <button type="submit" className="submit-password-btn">Change Password</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Profile;





// import React, { Component } from 'react';
// import axios from 'axios';
// import Navbar from './global-components/navbar-v5'

// class Profile extends Component {
//     state = {
//         activeTab: 'student', // State to manage which tab is active
//         currentPassword: '',
//         newPassword: '',
//         confirmNewPassword: '',
//         errorMessage: '',
//         studentDetails: null,
//         loading: true,
//         fetchError: '',
//     };

//     componentDidMount() {
//         this.fetchStudentDetails();
//     }

//     // Function to fetch student details from the API
//     fetchStudentDetails = async () => {
//         const rollNumber = localStorage.getItem('rollNumber'); // Retrieve roll number from local storage
//         if (rollNumber) {
//             try {
//                 const response = await axios.get(`http://localhost:9001/getStudentDetails/${rollNumber}`);
//                 this.setState({ studentDetails: response.data, loading: false });
//             } catch (error) {
//                 console.error('Error fetching student details:', error);
//                 this.setState({ fetchError: 'Failed to fetch student details', loading: false });
//             }
//         } else {
//             this.setState({ fetchError: 'Roll number not found in local storage', loading: false });
//         }
//     };

//     // Function to handle tab switching
//     handleTabSwitch = (tab) => {
//         this.setState({ activeTab: tab });
//     };

//     // Handle input changes in the password modal
//     handleInputChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     // Handle password change submission
//     handlePasswordSubmit = async (e) => {
//         e.preventDefault();
//         const { currentPassword, newPassword, confirmNewPassword } = this.state;

//         // Basic password validation
//         if (newPassword !== confirmNewPassword) {
//             this.setState({ errorMessage: 'New password and confirm password do not match!' });
//             return;
//         }

//         try {
//             // Simulating API call to change the password
//             // Replace with actual API call
//             await axios.post('http://localhost:9001/changePassword', { currentPassword, newPassword });
//             console.log('Password successfully changed');
//             this.setState({ 
//                 currentPassword: '', 
//                 newPassword: '', 
//                 confirmNewPassword: '', 
//                 errorMessage: '' 
//             });
//         } catch (error) {
//             console.error('Error changing password:', error);
//             this.setState({ errorMessage: 'Failed to change password' });
//         }
//     };

//     render() {
//         const { activeTab, currentPassword, newPassword, confirmNewPassword, errorMessage, studentDetails, loading, fetchError } = this.state;

//         return (
//             <div>
//                 <Navbar/>

//             <div className="profile-body-container">

//                 <div className="profile-container-pro">
//                     {/* Left Profile Card */}
//                     <div className="profile-left-side">
//                         <div className="profile-card-pro">
//                             <img 
//                                 src={process.env.PUBLIC_URL + '/assets/images/testimonials/testimonial-2-2.png'} 
//                                 alt="Profile Icon" 
//                                 className="profile-pic-pro" 
//                             />
//                             <h3>{loading ? 'Loading...' : (studentDetails ? studentDetails.name : 'Student')}</h3>
//                             <p>Student</p>

//                             <div className="stats-pro">
//                                 <p><strong>Roll No:</strong> {loading ? '...' : (studentDetails ? studentDetails.rollno : 'N/A')}</p>
//                                 <p><strong>Bus No:</strong>  {loading ? '...' : (studentDetails ? studentDetails.busno : 'N/A')}</p>
//                             </div>

//                             <button className="view-profile-btn-pro">Live Tracking</button>
//                         </div>
//                     </div>

//                     {/* Right Section */}
//                     <div className="profile-right-side">
//                         {/* Tabs for switching between details */}
//                         <div className="tabs-pro">
//                             <button 
//                                 className={`tab-btn-pro ${activeTab === 'student' ? 'active' : ''}`} 
//                                 onClick={() => this.handleTabSwitch('student')}
//                             >
//                                 Student Details
//                             </button>
//                             <button 
//                                 className={`tab-btn-pro ${activeTab === 'bus' ? 'active' : ''}`} 
//                                 onClick={() => this.handleTabSwitch('bus')}
//                             >
//                                 Bus Details
//                             </button>
//                             <button 
//                                 className={`tab-btn-pro ${activeTab === 'password' ? 'active' : ''}`} 
//                                 onClick={() => this.handleTabSwitch('password')}
//                             >
//                                 Change Password
//                             </button>
//                         </div>

//                         {/* Conditional rendering based on active tab */}
//                         {activeTab === 'student' && (
//                             <div className="profile-details-form">
//                                 <div className="profile-section-pro">
//                                     <h4>Student Details</h4>
//                                     {loading ? (
//                                         <p>Loading...</p>
//                                     ) : (
//                                         <form>
//                                             <div className="form-group-pro">
//                                                 <label>Student Name</label>
//                                                 <input type="text" value={studentDetails?.name || ''} readOnly />
//                                             </div>

//                                             <div className="form-group-pro">
//                                                 <label>Roll Number</label>
//                                                 <input type="text" value={studentDetails?.rollno || ''} readOnly />
//                                             </div>

//                                             <div className="form-group-pro">
//                                                 <label>Email</label>
//                                                 <input type="email" value={studentDetails?.email || ''} readOnly />
//                                             </div>

//                                             <div className="form-group-pro">
//                                                 <label>Campus</label>
//                                                 <input type="text" value={studentDetails?.campus || ''} readOnly />
//                                             </div>

//                                             <div className="form-group-pro">
//                                                 <label>Phone Number</label>
//                                                 <input type="text" value={studentDetails?.phoneno || ''} readOnly />
//                                             </div>
//                                         </form>
//                                     )}
//                                     {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
//                                 </div>
//                             </div>
//                         )}

//                         {activeTab === 'bus' && (
//                             <div className="profile-details-form">
//                                 <div className="profile-section-pro">
//                                     <h4>Bus Details</h4>
//                                     <form>
//                                         <div className="form-group-pro">
//                                             <label>Bus Number</label>
//                                             <input type="text" value="Bus 123" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Bus Starting Time</label>
//                                             <input type="text" value="7:30 AM" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Bus Route</label>
//                                             <input type="text" value="Route 1" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Bus Ground</label>
//                                             <input type="text" value="Central Bus Ground" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Driver Name</label>
//                                             <input type="text" value="John Smith" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Driver Phone Number</label>
//                                             <input type="text" value="+1234567890" readOnly />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Live Tracking</label>
//                                             <div className="live-tracking-placeholder">
//                                                 <p>Live tracking will be available soon...</p>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         )}

//                         {activeTab === 'password' && (
//                             <div className="profile-details-form">
//                                 <div className="profile-section-pro">
//                                     <h4>Change Password</h4>
//                                     <form onSubmit={this.handlePasswordSubmit}>
//                                         <div className="form-group-pro">
//                                             <label>Current Password</label>
//                                             <input 
//                                                 type="password" 
//                                                 name="currentPassword" 
//                                                 value={currentPassword} 
//                                                 onChange={this.handleInputChange} 
//                                                 required 
//                                             />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>New Password</label>
//                                             <input 
//                                                 type="password" 
//                                                 name="newPassword" 
//                                                 value={newPassword} 
//                                                 onChange={this.handleInputChange} 
//                                                 required 
//                                             />
//                                         </div>

//                                         <div className="form-group-pro">
//                                             <label>Confirm New Password</label>
//                                             <input 
//                                                 type="password" 
//                                                 name="confirmNewPassword" 
//                                                 value={confirmNewPassword} 
//                                                 onChange={this.handleInputChange} 
//                                                 required 
//                                             />
//                                         </div>

//                                         {errorMessage && <p className="error-message">{errorMessage}</p>}

//                                         <button type="submit" className="submit-password-btn">Change Password</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             </div>
//         );
//     }
// }

// export default Profile;







// import React, { Component } from 'react';
// import axios from 'axios';
// import Navbar from './global-components/navbar-v5';

// class Profile extends Component {
//     state = {
//         activeTab: 'student', // State to manage which tab is active
//         currentPassword: '',
//         newPassword: '',
//         confirmNewPassword: '',
//         errorMessage: '',
//         studentDetails: null,
//         loading: true,
//         fetchError: '',
//     };

//     componentDidMount() {
//         this.fetchStudentDetails();
//     }

//     // Function to fetch student details from the API
//     fetchStudentDetails = async () => {
//         const rollNumber = localStorage.getItem('rollNumber'); // Retrieve roll number from local storage
//         if (rollNumber) {
//             try {
//                 const response = await axios.get(`http://localhost:9001/getStudentDetails/${rollNumber}`);
//                 this.setState({ studentDetails: response.data, loading: false });
//             } catch (error) {
//                 console.error('Error fetching student details:', error);
//                 this.setState({ fetchError: 'Failed to fetch student details', loading: false });
//             }
//         } else {
//             this.setState({ fetchError: 'Roll number not found in local storage', loading: false });
//         }
//     };

//     // Function to handle input changes in the password modal
//     handleInputChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     // Handle password change submission
//     handlePasswordSubmit = async (e) => {
//         e.preventDefault();
//         const { currentPassword, newPassword, confirmNewPassword } = this.state;
//         const rollNumber = localStorage.getItem('rollNumber'); // Retrieve roll number from local storage

//         // Basic password validation
//         if (newPassword !== confirmNewPassword) {
//             this.setState({ errorMessage: 'New password and confirm password do not match!' });
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:9001/changePassword', {
//                 rollno: rollNumber, // Send roll number with the request
//                 currentPassword,
//                 newPassword,
//             });
//             this.setState({
//                 currentPassword: '',
//                 newPassword: '',
//                 confirmNewPassword: '',
//                 errorMessage: '',
//             });
//             alert(response.data.message); // Use the response message
//         } catch (error) {
//             console.error('Error changing password:', error);
//             this.setState({ errorMessage: error.response.data.message || 'Failed to change password' });
//         }
//     };

//     // Function to handle tab switching
//     handleTabSwitch = (tab) => {
//         this.setState({ activeTab: tab });
//     };

//     renderStudentDetails = () => {
//         const { loading, studentDetails, fetchError } = this.state;
//         return (
//             <div className="profile-details-form">
//                 <div className="profile-section-pro">
//                     <h4>Student Details</h4>
//                     {loading ? (
//                         <p>Loading...</p>
//                     ) : (
//                         <form>
//                             <div className="form-group-pro">
//                                 <label>Student Name</label>
//                                 <input type="text" value={studentDetails?.name || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Roll Number</label>
//                                 <input type="text" value={studentDetails?.rollno || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Email</label>
//                                 <input type="email" value={studentDetails?.email || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Campus</label>
//                                 <input type="text" value={studentDetails?.campus || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Phone Number</label>
//                                 <input type="text" value={studentDetails?.phoneno || ''} readOnly />
//                             </div>
//                         </form>
//                     )}
//                     {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
//                 </div>
//             </div>
//         );
//     };

//     renderBusDetails = () => {
//         return (
//             <div className="profile-details-form">
//                 <div className="profile-section-pro">
//                     <h4>Bus Details</h4>
//                     <form>
//                         <div className="form-group-pro">
//                             <label>Bus Number</label>
//                             <input type="text" value="Bus 123" readOnly />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>Bus Starting Time</label>
//                             <input type="text" value="7:30 AM" readOnly />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>Bus Route</label>
//                             <input type="text" value="Route 1" readOnly />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>Bus Ground</label>
//                             <input type="text" value="Central Bus Ground" readOnly />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>Driver Name</label>
//                             <input type="text" value="John Smith" readOnly />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>Driver Phone Number</label>
//                             <input type="text" value="+1234567890" readOnly />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>Live Tracking</label>
//                             <div className="live-tracking-placeholder">
//                                 <p>Live tracking will be available soon...</p>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         );
//     };

//     renderChangePassword = () => {
//         const { currentPassword, newPassword, confirmNewPassword, errorMessage } = this.state;
//         return (
//             <div className="profile-details-form">
//                 <div className="profile-section-pro">
//                     <h4>Change Password</h4>
//                     <form onSubmit={this.handlePasswordSubmit}>
//                         <div className="form-group-pro">
//                             <label>Current Password</label>
//                             <input 
//                                 type="password" 
//                                 name="currentPassword" 
//                                 value={currentPassword} 
//                                 onChange={this.handleInputChange} 
//                                 required 
//                             />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>New Password</label>
//                             <input 
//                                 type="password" 
//                                 name="newPassword" 
//                                 value={newPassword} 
//                                 onChange={this.handleInputChange} 
//                                 required 
//                             />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>Confirm New Password</label>
//                             <input 
//                                 type="password" 
//                                 name="confirmNewPassword" 
//                                 value={confirmNewPassword} 
//                                 onChange={this.handleInputChange} 
//                                 required 
//                             />
//                         </div>
//                         {errorMessage && <p className="error-message">{errorMessage}</p>}
//                         <button type="submit" className="submit-password-btn">Change Password</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     };

//     render() {
//         const { activeTab } = this.state;

//         return (
//             <div>
//                 <Navbar/>
//                 <div className="profile-body-container">
//                     <div className="profile-container-pro">
//                         {/* Left Profile Card */}
//                         <div className="profile-left-side">
//                             <div className="profile-card-pro">
//                                 <img 
//                                     src={process.env.PUBLIC_URL + '/assets/images/testimonials/testimonial-2-2.png'} 
//                                     alt="Profile Icon" 
//                                     className="profile-pic-pro" 
//                                 />
//                                 <h3>{this.state.loading ? 'Loading...' : (this.state.studentDetails ? this.state.studentDetails.name : 'Student')}</h3>
//                                 <p>Student</p>
//                                 <div className="stats-pro">
//                                     <p><strong>Roll No:</strong> {this.state.loading ? '...' : (this.state.studentDetails ? this.state.studentDetails.rollno : 'N/A')}</p>
//                                     <p><strong>Bus No:</strong>  {this.state.loading ? '...' : (this.state.studentDetails ? this.state.studentDetails.busno : 'N/A')}</p>
//                                 </div>
//                                 <button className="view-profile-btn-pro">Live Tracking</button>
//                             </div>
//                         </div>

//                         {/* Right Section */}
//                         <div className="profile-right-side">
//                             {/* Tabs for switching between details */}
//                             <div className="tabs-pro">
//                                 <button 
//                                     className={`tab-btn-pro ${activeTab === 'student' ? 'active' : ''}`} 
//                                     onClick={() => this.handleTabSwitch('student')}
//                                 >
//                                     Student Details
//                                 </button>
//                                 <button 
//                                     className={`tab-btn-pro ${activeTab === 'bus' ? 'active' : ''}`} 
//                                     onClick={() => this.handleTabSwitch('bus')}
//                                 >
//                                     Bus Details
//                                 </button>
//                                 <button 
//                                     className={`tab-btn-pro ${activeTab === 'password' ? 'active' : ''}`} 
//                                     onClick={() => this.handleTabSwitch('password')}
//                                 >
//                                     Change Password
//                                 </button>
//                             </div>

//                             {/* Conditional rendering based on active tab */}
//                             {activeTab === 'student' && this.renderStudentDetails()}
//                             {activeTab === 'bus' && this.renderBusDetails()}
//                             {activeTab === 'password' && this.renderChangePassword()}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Profile;



// import React, { Component } from 'react';
// import axios from 'axios';
// import Navbar from './global-components/navbar-v5';

// class Profile extends Component {
//     state = {
//         activeTab: 'student', // State to manage which tab is active
//         currentPassword: '',
//         newPassword: '',
//         confirmNewPassword: '',
//         errorMessage: '',
//         studentDetails: null,
//         loading: true,
//         fetchError: '',
//     };

//     componentDidMount() {
//         this.fetchStudentDetails();
//     }

//     // Function to fetch student details from the API
//     fetchStudentDetails = async () => {
//         const rollNumber = localStorage.getItem('rollNumber'); // Retrieve roll number from local storage
//         if (rollNumber) {
//             try {
//                 const response = await axios.get(`http://localhost:9001/getStudentDetails/${rollNumber}`);
//                 this.setState({ studentDetails: response.data, loading: false });
//             } catch (error) {
//                 console.error('Error fetching student details:', error);
//                 this.setState({ fetchError: 'Failed to fetch student details', loading: false });
//             }
//         } else {
//             this.setState({ fetchError: 'Roll number not found in local storage', loading: false });
//         }
//     };

//     fetchBusDetails = async (busNumber) => {
//         if (busNumber) {
//             try {
//                 const response = await axios.get(`http://localhost:9001/getBusDetails/${busNumber}`);
//                 this.setState({ busDetails: response.data });
//             } catch (error) {
//                 console.error('Error fetching bus details:', error);
//                 this.setState({ fetchError: 'Failed to fetch bus details' });
//             }
//         }
//     };

//     // Function to handle input changes in the password modal
//     handleInputChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     // Handle password change submission
//     handlePasswordSubmit = async (e) => {
//         e.preventDefault();
//         const { currentPassword, newPassword, confirmNewPassword } = this.state;
//         const rollNumber = localStorage.getItem('rollNumber'); // Retrieve roll number from local storage

//         // Basic password validation
//         if (newPassword !== confirmNewPassword) {
//             this.setState({ errorMessage: 'New password and confirm password do not match!' });
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:9001/changePassword', {
//                 rollno: rollNumber, // Send roll number with the request
//                 currentPassword,
//                 newPassword,
//             });
//             this.setState({
//                 currentPassword: '',
//                 newPassword: '',
//                 confirmNewPassword: '',
//                 errorMessage: '',
//             });
//             alert(response.data.message); // Use the response message
//         } catch (error) {
//             console.error('Error changing password:', error);
//             this.setState({ errorMessage: error.response.data.message || 'Failed to change password' });
//         }
//     };

//     // Function to handle tab switching
//     handleTabSwitch = (tab) => {
//         this.setState({ activeTab: tab });
//     };

//     renderStudentDetails = () => {
//         const { loading, studentDetails, fetchError } = this.state;
//         return (
//             <div className="profile-details-form">
//                 <div className="profile-section-pro">
//                     <h4>Student Details</h4>
//                     {loading ? (
//                         <p>Loading...</p>
//                     ) : (
//                         <form>
//                             <div className="form-group-pro">
//                                 <label>Student Name</label>
//                                 <input type="text" value={studentDetails?.name || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Roll Number</label>
//                                 <input type="text" value={studentDetails?.rollno || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Email</label>
//                                 <input type="email" value={studentDetails?.email || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Campus</label>
//                                 <input type="text" value={studentDetails?.campus || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Phone Number</label>
//                                 <input type="text" value={studentDetails?.phoneno || ''} readOnly />
//                             </div>
//                         </form>
//                     )}
//                     {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
//                 </div>
//             </div>
//         );
//     };

//     // renderBusDetails = () => {
//     //     return (
//     //         <div className="profile-details-form">
//     //             <div className="profile-section-pro">
//     //                 <h4>Bus Details</h4>
//     //                 <form>
//     //                     <div className="form-group-pro">
//     //                         <label>Bus Number</label>
//     //                         <input type="text" value="Bus 123" readOnly />
//     //                     </div>
//     //                     <div className="form-group-pro">
//     //                         <label>Bus Starting Time</label>
//     //                         <input type="text" value="7:30 AM" readOnly />
//     //                     </div>
//     //                     <div className="form-group-pro">
//     //                         <label>Bus Route</label>
//     //                         <input type="text" value="Route 1" readOnly />
//     //                     </div>
//     //                     <div className="form-group-pro">
//     //                         <label>Bus Ground</label>
//     //                         <input type="text" value="Central Bus Ground" readOnly />
//     //                     </div>
//     //                     <div className="form-group-pro">
//     //                         <label>Driver Name</label>
//     //                         <input type="text" value="John Smith" readOnly />
//     //                     </div>
//     //                     <div className="form-group-pro">
//     //                         <label>Driver Phone Number</label>
//     //                         <input type="text" value="+1234567890" readOnly />
//     //                     </div>
//     //                     <div className="form-group-pro">
//     //                         <label>Live Tracking</label>
//     //                         <div className="live-tracking-placeholder">
//     //                             <p>Live tracking will be available soon...</p>
//     //                         </div>
//     //                     </div>
//     //                 </form>
//     //             </div>
//     //         </div>
//     //     );
//     // };
//     renderBusDetails = () => {
//         const { busDetails, fetchError } = this.state;
//         return (
//             <div className="profile-details-form">
//                 <div className="profile-section-pro">
//                     <h4>Bus Details</h4>
//                     {busDetails ? (
//                         <form>
//                             <div className="form-group-pro">
//                                 <label>Bus Number</label>
//                                 <input type="text" value={busDetails.busno || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Bus Starting Time</label>
//                                 <input type="text" value={busDetails.busstartingtime || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Bus Route</label>
//                                 <input type="text" value={busDetails.busroute || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Bus Ground</label>
//                                 <input type="text" value={busDetails.busground || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Driver Name</label>
//                                 <input type="text" value={busDetails.drivername || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Driver Phone Number</label>
//                                 <input type="text" value={busDetails.driverphone || ''} readOnly />
//                             </div>
//                             <div className="form-group-pro">
//                                 <label>Live Tracking</label>
//                                 <div className="live-tracking-placeholder">
//                                     <p>Live tracking will be available soon...</p>
//                                 </div>
//                             </div>
//                         </form>
//                     ) : (
//                         <p>{fetchError}</p>
//                     )}
//                 </div>
//             </div>
//         );
//     };


//     renderChangePassword = () => {
//         const { currentPassword, newPassword, confirmNewPassword, errorMessage } = this.state;
//         return (
//             <div className="profile-details-form">
//                 <div className="profile-section-pro">
//                     <h4>Change Password</h4>
//                     <form onSubmit={this.handlePasswordSubmit}>
//                         <div className="form-group-pro">
//                             <label>Current Password</label>
//                             <input 
//                                 type="password" 
//                                 name="currentPassword" 
//                                 value={currentPassword} 
//                                 onChange={this.handleInputChange} 
//                                 required 
//                             />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>New Password</label>
//                             <input 
//                                 type="password" 
//                                 name="newPassword" 
//                                 value={newPassword} 
//                                 onChange={this.handleInputChange} 
//                                 required 
//                             />
//                         </div>
//                         <div className="form-group-pro">
//                             <label>Confirm New Password</label>
//                             <input 
//                                 type="password" 
//                                 name="confirmNewPassword" 
//                                 value={confirmNewPassword} 
//                                 onChange={this.handleInputChange} 
//                                 required 
//                             />
//                         </div>
//                         {errorMessage && <p className="error-message">{errorMessage}</p>}
//                         <button type="submit" className="submit-password-btn">Change Password</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     };

//     render() {
//         const { activeTab } = this.state;

//         return (
//             <div>
//                 <Navbar/>
//                 <div className="profile-body-container">
//                     <div className="profile-container-pro">
//                         {/* Left Profile Card */}
//                         <div className="profile-left-side">
//                             <div className="profile-card-pro">
//                                 <img 
//                                     src={process.env.PUBLIC_URL + '/assets/images/testimonials/testimonial-2-2.png'} 
//                                     alt="Profile Icon" 
//                                     className="profile-pic-pro" 
//                                 />
//                                 <h3>{this.state.loading ? 'Loading...' : (this.state.studentDetails ? this.state.studentDetails.name : 'Student')}</h3>
//                                 <p>Student</p>
//                                 <div className="stats-pro">
//                                     <p><strong>Roll No:</strong> {this.state.loading ? '...' : (this.state.studentDetails ? this.state.studentDetails.rollno : 'N/A')}</p>
//                                     <p><strong>Bus No:</strong>  {this.state.loading ? '...' : (this.state.studentDetails ? this.state.studentDetails.busno : 'N/A')}</p>
//                                 </div>
//                                 <button className="view-profile-btn-pro">Live Tracking</button>
//                             </div>
//                         </div>

//                         {/* Right Section */}
//                         <div className="profile-right-side">
//                             {/* Tabs for switching between details */}
//                             <div className="tabs-pro">
//                                 <button 
//                                     className={`tab-btn-pro ${activeTab === 'student' ? 'active' : ''}`} 
//                                     onClick={() => this.handleTabSwitch('student')}
//                                 >
//                                     Student Details
//                                 </button>
//                                 <button 
//                                     className={`tab-btn-pro ${activeTab === 'bus' ? 'active' : ''}`} 
//                                     onClick={() => this.handleTabSwitch('bus')}
//                                 >
//                                     Bus Details
//                                 </button>
//                                 <button 
//                                     className={`tab-btn-pro ${activeTab === 'password' ? 'active' : ''}`} 
//                                     onClick={() => this.handleTabSwitch('password')}
//                                 >
//                                     Change Password
//                                 </button>
//                             </div>

//                             {/* Conditional rendering based on active tab */}
//                             {activeTab === 'student' && this.renderStudentDetails()}
//                             {activeTab === 'bus' && this.renderBusDetails()}
//                             {activeTab === 'password' && this.renderChangePassword()}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Profile;



import React, { Component } from 'react';
import axios from '../axios';
import Navbar from './global-components/navbar-v5';

class Profile extends Component {
    state = {
        activeTab: 'student', // State to manage active tab
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        errorMessage: '',
        studentDetails: null,
        busDetails: null,
        loading: true,
        fetchError: '',
    };

    componentDidMount() {
        this.fetchStudentDetails();
    }

    // Fetch student details from the API
    fetchStudentDetails = async () => {
        const rollNumber = localStorage.getItem('rollNumber');
        if (rollNumber) {
            try {
                // const response = await axios.get(`http://localhost:9001/getStudentDetails/${rollNumber}`);
                const response = await axios.get(`/getStudentDetails/${rollNumber}`);
                this.setState({ studentDetails: response.data, loading: false });
                if (response.data.busno) {
                    this.fetchBusDetails(response.data.busno);
                }
            } catch (error) {
                console.error('Error fetching student details:', error);
                this.setState({ fetchError: 'Failed to fetch student details', loading: false });
            }
        } else {
            this.setState({ fetchError: 'Roll number not found in local storage', loading: false });
        }
    };

    // Fetch bus details based on the bus number
    fetchBusDetails = async (busNumber) => {
        try {
            // const response = await axios.get(`http://localhost:9001/getBusDetails/${busNumber}`);
            const response = await axios.get(`/getBusDetails/${busNumber}`);
            this.setState({ busDetails: response.data });
        } catch (error) {
            console.error('Error fetching bus details:', error);
            this.setState({ fetchError: 'Failed to fetch bus details' });
        }
    };

    // Handle input changes for password fields
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // Handle password change submission
    handlePasswordSubmit = async (e) => {
        e.preventDefault();
        const { currentPassword, newPassword, confirmNewPassword } = this.state;
        const rollNumber = localStorage.getItem('rollNumber');

        if (newPassword !== confirmNewPassword) {
            this.setState({ errorMessage: 'New password and confirm password do not match!' });
            return;
        }

        try {
            // const response = await axios.post('http://localhost:9001/changePassword', {
            const response = await axios.post('/changePassword', {
                rollno: rollNumber,
                currentPassword,
                newPassword,
            });
            this.setState({
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: '',
                errorMessage: '',
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error changing password:', error);
            this.setState({ errorMessage: error.response?.data?.message || 'Failed to change password' });
        }
    };

    // Handle tab switching
    handleTabSwitch = (tab) => {
        this.setState({ activeTab: tab });
    };

    renderStudentDetails = () => {
        const { loading, studentDetails, fetchError } = this.state;
        return (
            <div className="profile-details-form">
                <div className="profile-section-pro">
                    <h4>Student Details</h4>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <form>
                            <div className="form-group-pro">
                                <label>Student Name</label>
                                <input type="text" value={studentDetails?.name || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Roll Number</label>
                                <input type="text" value={studentDetails?.rollno || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Email</label>
                                <input type="email" value={studentDetails?.email || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Campus</label>
                                <input type="text" value={studentDetails?.campus || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Phone Number</label>
                                <input type="text" value={studentDetails?.phoneno || ''} readOnly />
                            </div>
                        </form>
                    )}
                    {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
                </div>
            </div>
        );
    };

    renderBusDetails = () => {
        const { busDetails, fetchError } = this.state;
        return (
            <div className="profile-details-form">
                <div className="profile-section-pro">
                    <h4>Bus Details</h4>
                    {busDetails ? (
                        <form>
                            <div className="form-group-pro">
                                <label>Bus Number</label>
                                <input type="text" value={busDetails.busno || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Bus Starting Time</label>
                                <input type="text" value={busDetails.bustartingtime || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Bus Route</label>
                                <input type="text" value={busDetails.busroute || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Bus Ground</label>
                                <input type="text" value={busDetails.busground || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Driver Name</label>
                                <input type="text" value={busDetails.drivername || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Driver Phone Number</label>
                                <input type="text" value={busDetails.driverphone || ''} readOnly />
                            </div>
                            <div className="form-group-pro">
                                <label>Live Tracking</label>
                                <div className="live-tracking-placeholder">
                                    <p>Live tracking will be available soon...</p>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <p>{fetchError}</p>
                    )}
                </div>
            </div>
        );
    };

    renderChangePassword = () => {
        const { currentPassword, newPassword, confirmNewPassword, errorMessage } = this.state;
        return (
            <div className="profile-details-form">
                <div className="profile-section-pro">
                    <h4>Change Password</h4>
                    <form onSubmit={this.handlePasswordSubmit}>
                        <div className="form-group-pro">
                            <label>Current Password</label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={currentPassword}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group-pro">
                            <label>New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={newPassword}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group-pro">
                            <label>Confirm New Password</label>
                            <input
                                type="password"
                                name="confirmNewPassword"
                                value={confirmNewPassword}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="submit-password-btn">Change Password</button>
                    </form>
                </div>
            </div>
        );
    };

    render() {
        const { activeTab, studentDetails } = this.state;

        return (
            <div>
                <Navbar />
                <div className="profile-body-container">
                    <div className="profile-container-pro">
                        <div className="profile-left-side">
                            <div className="profile-card-pro">
                                <img
                                    src={process.env.PUBLIC_URL + '/assets/images/testimonials/testimonial-2-2.png'}
                                    alt="Profile Icon"
                                    className="profile-pic-pro"
                                />
                                <h3>{this.state.loading ? 'Loading...' : (studentDetails ? studentDetails.name : 'Student')}</h3>
                                <p>Student</p>
                                <div className="stats-pro">
                                    <p><strong>Roll No:</strong> {studentDetails ? studentDetails.rollno : 'N/A'}</p>
                                    <p><strong>Bus No:</strong> {studentDetails ? studentDetails.busno : 'N/A'}</p>
                                </div>
                                <button className="view-profile-btn-pro">Live Tracking</button>
                            </div>
                        </div>

                        <div className="profile-right-side">
                            <div className="tabs-pro">
                                <button
                                    className={`tab-btn-pro ${activeTab === 'student' ? 'active' : ''}`}
                                    onClick={() => this.handleTabSwitch('student')}
                                >
                                    Student Details
                                </button>
                                <button
                                    className={`tab-btn-pro ${activeTab === 'bus' ? 'active' : ''}`}
                                    onClick={() => this.handleTabSwitch('bus')}
                                >
                                    Bus Details
                                </button>
                                <button
                                    className={`tab-btn-pro ${activeTab === 'password' ? 'active' : ''}`}
                                    onClick={() => this.handleTabSwitch('password')}
                                >
                                    Change Password
                                </button>
                            </div>

                            <div className="tab-content">
                                {activeTab === 'student' && this.renderStudentDetails()}
                                {activeTab === 'bus' && this.renderBusDetails()}
                                {activeTab === 'password' && this.renderChangePassword()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
