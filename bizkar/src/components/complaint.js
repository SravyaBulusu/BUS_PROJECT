// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import st from './style.module.css';
// import { Random } from "react-animated-text";
// import { GrMapLocation } from "react-icons/gr";
// import { FaPhone } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";

// const Fun = () => {
//     const [busnumber, setBusNumber] = useState(0);
//     const [subject, setSubject] = useState('');
//     const [describe, setDescribe] = useState('');
//     const [isEditing, setIsEditing] = useState(true);
//     const [showPreview, setShowPreview] = useState(false);
//     const animationRef = useRef(null);

//     useEffect(() => {
//         animationRef.current = true;
//     }, []);

//     const HandleChange = (event) => {
//         const { name, value } = event.target;
//         if (name === 'subject') setSubject(value);
//         if (name === 'busnumber') setBusNumber(value);
//         if (name === 'describe') setDescribe(value);
//     };

//     const HandleSubmit = () => {
//         if (busnumber === 0 || subject === '' || describe === '') {
//             return alert("Please fill all the details");
//         }
//         setShowPreview(true);
//         setIsEditing(false);
//     };

//     const handleEdit = () => {
//         setShowPreview(false);
//         setIsEditing(true);
//     };

//     const handleFinalSubmit = () => {
//         var data = {
//             busNumber: busnumber,
//             subject: subject,
//             description: describe
//         };

//         axios.post("http://localhost:9001/com", data)
//             .then(res => {
//                 console.log(res);
//                 alert("Complaint submitted successfully!");
//                 setBusNumber(0);
//                 setSubject('');
//                 setDescribe('');
//                 setShowPreview(false);
//                 setIsEditing(true);
//             })
//             .catch(err => {
//                 console.error(err);
//                 alert("There was an error submitting your complaint.");
//             });
//     };

//     return (
//         <>
//             <div className={st.main}>
//                 <div className={st.hesitate}>
//                     <div className={st.exampleStyle}>
//                         {!animationRef.current && (
//                             <Random
//                                 text="Don't Hesitate To Contact Us"
//                                 effect="verticalFadeIn"
//                                 effectChange={2}
//                                 effectDirection="up"
//                                 iterations={1}
//                                 onAnimationComplete={() => {
//                                     animationRef.current = true;
//                                 }}
//                             />
//                         )}
//                         {animationRef.current && (
//                             <span>Don't Hesitate To Contact Us</span>
//                         )}
//                     </div>
//                     <div className={st.DC}>
//                         Sed ut perspiciatis unde omnis iste natus erro voluptat accusantium
//                         doloremque laudantium totam rem aperiam eaque
//                     </div>
//                     <div className={st.div}>
//                         <div className={st.sub}>
//                             <div className={st.i}><GrMapLocation /></div>
//                             <div className={st.h}>Address :</div>
//                             <div className={st.m8}>
//                                 Transport Department,<br /> Vishweswerao Bhavan
//                             </div>
//                         </div>
//                         <div className={st.sub}>
//                             <div className={st.i}><FaPhone /></div>
//                             <div className={st.h}>Contact :</div>
//                             <div className={st.m}>455647878212115</div>
//                         </div>
//                         <div className={st.sub}>
//                             <div className={st.i}><MdOutlineEmail /></div>
//                             <div className={st.h}>Support :</div>
//                             <div className={st.m}>TransportSupport@gmail.com</div>
//                         </div>
//                     </div>
//                     <div className={st.butdiv}>
//                         <div className={st.animated_button1}>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                             Learn More
//                         </div>
//                     </div>
//                 </div>
//                 <div className={st.hesitate2}>
//                     <div className={st.exampleStyle2}>
//                         {!animationRef.current && (
//                             <Random
//                                 text="Raise Complaint"
//                                 effect="verticalFadeIn"
//                                 effectChange={2}
//                                 effectDirection="up"
//                                 iterations={1}
//                                 onAnimationComplete={() => {
//                                     animationRef.current = true;
//                                 }}
//                             />
//                         )}
//                         {animationRef.current && (
//                             <span>Raise Complaint</span>
//                         )}
//                     </div>
//                     <div className={st.DC}>
//                         Sed ut perspiciatis unde omnis iste natus erro voluptat accusantium
//                         doloremque laudantium totam rem aperiam eaque
//                     </div>
//                     <div className={st.div}>
//                         <div className={st.sub2}>
//                             <input 
//                                 type="text" 
//                                 placeholder="Subject" 
//                                 name='subject' 
//                                 onChange={HandleChange} 
//                                 value={subject} 
//                                 required 
//                             />
//                         </div>
//                         <div className={st.sub2}>
//                             <input 
//                                 type="number" 
//                                 placeholder="Bus Number" 
//                                 name='busnumber' 
//                                 onChange={HandleChange} 
//                                 // value={busnumber} 
//                                 required 
//                             />
//                         </div>
//                         <div className={st.sub2}>
//                             <textarea 
//                                 placeholder="Description" 
//                                 name='describe' 
//                                 onChange={HandleChange} 
//                                 value={describe} 
//                             />
//                         </div>
//                     </div>
//                     <div className={st.butdiv2}>
//                         <button className={st.button} onClick={HandleSubmit}>
//                             Submit
//                         </button>
//                     </div>
//                 </div>

//                 {/* Preview Overlay */}
//                 {showPreview && (
//                    <div className={st.previewOverlay}>
//                    <div className={st.previewBox}>
//                        <h3>Preview</h3>
//                        <div className={st.previewContent}>
//                            <div className={st.previewItem}>
//                                <strong>Subject:</strong>
//                                <p>{subject}</p>
//                            </div>
//                            <div className={st.previewItem}>
//                                <strong>Bus Number:</strong>
//                                <p>{busnumber}</p>
//                            </div>
//                            <div className={st.previewItem}>
//                                <strong>Description:</strong>
//                                <p>{describe}</p>
//                            </div>
//                        </div>
//                        <button onClick={handleEdit} className={st.editButton}>Edit</button>
//                        <button onClick={handleFinalSubmit} className={st.submitButton}>Confirm Submission</button>
//                    </div>
//                </div>


//                 )}
//             </div>
//         </>
//     );
// };

// export default Fun;



// import Navbar from './global-components/navbar-v5'
// import Footer from './global-components/footer-v2'
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';
// import './mystyles.css'
// class AboutStyleOne extends Component {

//   render() {

//     let publicUrl = process.env.PUBLIC_URL + '/'
//     let imagealt = 'image'

//     return (

//       <div>
//         <Navbar />
//         <section className="about-one  go-top">
//           <div className="container">
//             <div className="about-one__moc">
//               <div className='hoverme'>Hover Me</div>
//               <div>
//                 <div className="letter_image">
//                   <div className="animated_mail">
//                     <div className="back_fold"></div>
//                     <div className="letter">
//                       <button className="click">
//                         Raise Complaint
//                       </button>
//                     </div>
//                     <div className="top_fold"></div>
//                     <div className="body"></div>
//                     <div className="left_fold"></div>
//                   </div>
//                   <div className="shadow"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-end">
//               <div className="col-lg-6">
//                 <div className="about-one__content">
//                   <div className="block-title text-left">
//                     {/* <p><span>About Us</span></p> */}
//                     <h3>We Are Here To <br /> Solve Your Problems</h3>
//                     <div className="block-title_line" />{/* /.block-title_line */}
//                   </div>{/* /.block-title */}
//                   <p>"We strive to make your daily commute comfortable, safe, and on time."
//                   </p>
//                   <h4>We Are Always With You</h4>
//                   <p>Our Transport Department is committed to ensuring safe, timely, and convenient transportation services for all. If you have experienced any issues with our transport services, we encourage you to share your concerns with us. Your feedback is valuable and helps us improve the services we provide.</p>
//                   <Link to="/complaint2" className="thm-btn about-one__btn">Raise Complaint <i className="fa fa-angle-double-right" /></Link>
//                   {/* /.thm-btn */}
//                 </div>{/* /.about-one__content */}
//               </div>{/* /.col-lg-6 */}
//             </div>{/* /.row */}
//           </div>{/* /.container */}
//         </section>
//         <Footer />
//       </div>


//     )

//   }
// }

// export default AboutStyleOne

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './global-components/navbar-v5';
// import Footer from './global-components/footer-v2';
// import axios from 'axios';
// import './mystyles.css';

// const AboutStyleOne = () => {
//     const [popupVisible, setPopupVisible] = useState(false);
//     const [showForm, setShowForm] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [rollNumber, setRollNumber] = useState('');
//     const [password, setPassword] = useState('');

//     useEffect(() => {
//         const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
//         setIsLoggedIn(loggedIn);

//         if (!loggedIn) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }
//     }, []);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:9001/login', {
//                 rollno: rollNumber,
//                 password: password,
//             });

//             if (response.status === 200) {
//                 setIsLoggedIn(true);
//                 localStorage.setItem('isLoggedIn', 'true');
//                 localStorage.setItem('rollNumber', rollNumber);
//                 setPopupVisible(false);
//                 document.body.style.overflow = 'auto';
//             }
//         } catch (error) {
//             console.error('Login failed:', error.response ? error.response.data.message : error.message);
//             alert('Login failed: ' + (error.response ? error.response.data.message : 'An error occurred'));
//         }
//     };

//     const handleButtonClick = () => {
//         if (!isLoggedIn) {
//             setPopupVisible(true);
//             document.body.style.overflow = 'hidden';
//         }
//     };

//     return (
//         <div>
//             <div
//                 style={{
//                     filter: popupVisible ? 'blur(8px)' : 'none',
//                     pointerEvents: popupVisible ? 'none' : 'auto',
//                     transition: 'filter 0.3s ease',
//                 }}
//             >
//                 <Navbar />
//                 <section className="about-one go-top">
//                     <div className="container">
//                         <div className="about-one__moc">
//                             <div className='hoverme'>Hover Me</div>
//                             <div>
//                                 <div className="letter_image">
//                                     <div className="animated_mail">
//                                         <div className="back_fold"></div>
//                                         <div className="letter">
//                                             <button onClick={handleButtonClick} className="click">
//                                                 Raise Complaint
//                                             </button>
//                                         </div>
//                                         <div className="top_fold"></div>
//                                         <div className="body"></div>
//                                         <div className="left_fold"></div>
//                                     </div>
//                                     <div className="shadow"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row justify-content-end">
//                             <div className="col-lg-6">
//                                 <div className="about-one__content">
//                                     <div className="block-title text-left">
//                                         <h3>We Are Here To <br /> Solve Your Problems</h3>
//                                         <div className="block-title_line" />
//                                     </div>
//                                     <p>"We strive to make your daily commute comfortable, safe, and on time."</p>
//                                     <h4>We Are Always With You</h4>
//                                     <p>Our Transport Department is committed to ensuring safe, timely, and convenient transportation services for all. If you have experienced any issues with our transport services, we encourage you to share your concerns with us. Your feedback is valuable and helps us improve the services we provide.</p>
//                                     <button onClick={handleButtonClick} className="thm-btn about-one__btn">
//                                         Raise Complaint <i className="fa fa-angle-double-right" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <Footer />
//             </div>

//             {popupVisible && !isLoggedIn && (
//                 <div
//                     style={{
//                         position: 'fixed',
//                         top: 0,
//                         left: 0,
//                         width: '100vw',
//                         height: '100vh',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                         zIndex: 1000,
//                     }}
//                 >
//                     <div
//                         style={{
//                             backgroundColor: '#fff',
//                             padding: '20px',
//                             borderRadius: '10px',
//                             textAlign: 'center',
//                             maxWidth: '400px',
//                             width: '100%',
//                             position: 'relative',
//                         }}
//                     >
//                         {!showForm && (
//                             <>
//                                 <h2>Login Required</h2>
//                                 <p>You need to login to view the rest of the website.</p>
//                                 <button
//                                     onClick={() => setShowForm(true)}
//                                     style={{
//                                         padding: '10px 20px',
//                                         backgroundColor: '#007bff',
//                                         color: 'white',
//                                         border: 'none',
//                                         cursor: 'pointer',
//                                         width: '100%',
//                                         marginTop: '10px',
//                                     }}
//                                 >
//                                     LOGIN
//                                 </button>
//                             </>
//                         )}

//                         {showForm && (
//                             <form onSubmit={handleLogin}>
//                                 <div style={{ marginBottom: '10px' }}>
//                                     <label htmlFor="rollNumber">Roll Number</label>
//                                     <input
//                                         type="text"
//                                         id="rollNumber"
//                                         value={rollNumber}
//                                         onChange={(e) => setRollNumber(e.target.value)}
//                                         required
//                                         style={{
//                                             display: 'block',
//                                             width: '100%',
//                                             padding: '8px',
//                                             marginTop: '5px',
//                                         }}
//                                     />
//                                 </div>
//                                 <div style={{ marginBottom: '10px' }}>
//                                     <label htmlFor="password">Password</label>
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         required
//                                         style={{
//                                             display: 'block',
//                                             width: '100%',
//                                             padding: '8px',
//                                             marginTop: '5px',
//                                         }}
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     style={{
//                                         padding: '10px 20px',
//                                         backgroundColor: '#007bff',
//                                         color: 'white',
//                                         border: 'none',
//                                         cursor: 'pointer',
//                                         width: '100%',
//                                         marginTop: '10px',
//                                     }}
//                                 >
//                                     LOGIN
//                                 </button>
//                             </form>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AboutStyleOne;



import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../axios';
import Navbar from './global-components/navbar-v5';
import Footer from './global-components/footer-v2';
import { Link } from 'react-router-dom';
import './mystyles.css';

const AboutStyleOne = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [rollNumber, setRollNumber] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);

        if (!loggedIn) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // const response = await axios.post('http://localhost:9001/login', {
            //     rollno: rollNumber,
            //     password: password,
            const response = await axios.post('/login', {
                rollno: rollNumber,
                password: password,
            });

            if (response.status === 200) {
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('rollNumber', rollNumber);

                setPopupVisible(false);
                document.body.classList.remove('no-scroll');
            }
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data.message : error.message);
            alert('Login failed: ' + (error.response ? error.response.data.message : 'An error occurred'));
        }
    };

    const handleScroll = () => {
        if (!hasScrolled && !isLoggedIn) {
            setPopupVisible(true);
            setHasScrolled(true);
        }
    };

    useEffect(() => {
        if (!isLoggedIn) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoggedIn]);

    useEffect(() => {
        if (popupVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [popupVisible]);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        setPopupVisible(false);
        setShowForm(false);
        setRollNumber('');
        setPassword('');
        setHasScrolled(false);
        history.push('/');
    };

    return (
        <div>
            <div
                style={{
                    filter: popupVisible ? 'blur(8px)' : 'none',
                    pointerEvents: popupVisible ? 'none' : 'auto',
                    transition: 'filter 0.3s ease',
                }}
            >
                <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <section className="about-one go-top">
                    <div className="container">
                        <div className="about-one__moc">
                            <div className='hoverme'>Hover Me</div>
                            <div>
                                <div className="letter_image">
                                    <div className="animated_mail">
                                        <div className="back_fold"></div>
                                        <div className="letter">
                                            {/* <button className="click">Raise Complaint</button> */}
                                            <Link to="/complaint2" className="click">Raise Complaint </Link>

                                        </div>
                                        <div className="top_fold"></div>
                                        <div className="body"></div>
                                        <div className="left_fold"></div>
                                    </div>
                                    <div className="shadow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-6">
                                <div className="about-one__content">
                                    <div className="block-title text-left">
                                        <h3>We Are Here To <br /> Solve Your Problems</h3>
                                        <div className="block-title_line"></div>
                                    </div>
                                    <p>"We strive to make your daily commute comfortable, safe, and on time."</p>
                                    <h4>We Are Always With You</h4>
                                    <p>Our Transport Department is committed to ensuring safe, timely, and convenient transportation services for all. If you have experienced any issues with our transport services, we encourage you to share your concerns with us. Your feedback is valuable and helps us improve the services we provide.</p>
                                    <Link to="/complaint2" className="thm-btn about-one__btn">Raise Complaint <i className="fa fa-angle-double-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>

            {popupVisible && !isLoggedIn && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: '20px',
                            borderRadius: '10px',
                            textAlign: 'center',
                            maxWidth: '400px',
                            width: '100%',
                        }}
                    >
                        {!showForm && (
                            <>
                                <h2>Login Required</h2>
                                <p>You need to login to view the rest of the website.</p>
                                <button
                                    onClick={() => setShowForm(true)}
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        cursor: 'pointer',
                                        width: '100%',
                                        marginTop: '10px',
                                    }}
                                >
                                    LOGIN
                                </button>
                            </>
                        )}

                        {showForm && (
                            <form onSubmit={handleLogin}>
                                <div style={{ marginBottom: '10px' }}>
                                    <label htmlFor="rollNumber">Roll Number</label>
                                    <input
                                        type="text"
                                        id="rollNumber"
                                        value={rollNumber}
                                        onChange={(e) => setRollNumber(e.target.value)}
                                        required
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            padding: '8px',
                                            marginTop: '5px',
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            padding: '8px',
                                            marginTop: '5px',
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        cursor: 'pointer',
                                        width: '100%',
                                        marginTop: '10px',
                                    }}
                                >
                                    LOGIN
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutStyleOne;
