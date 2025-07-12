// import React from 'react';
// import Navbar from './global-components/navbar-v5';
// import Banner from './section-components/banner-v5';
// import Brand from './section-components/brand-two';
// import WhyChooseUs from './section-components/why-choose-us-v2';
// import Service from './section-components/service';
// import FunfactV2 from './section-components/funfact-v2';
// import Video from './section-components/video';
// import Cta from './section-components/cta-v2';
// import Case from './section-components/case';
// import TestimonialV2 from './section-components/testimonial-v2';
// import Pricing from './section-components/pricing';
// import Contact from './section-components/contact';
// import BrandV3 from './section-components/brand-v3';
// import BlogPost from './section-components/blog-post';
// import Footer from './global-components/footer-v2';
// import Funfact from './section-components/funfact-v5';


// const Home_V5 = () => {
//     return <div>
//         <Navbar />
//         <Banner /><br></br><br></br><br></br><br></br><br></br><br></br>
//         <Video />
//         {/* <Brand /> */}
//         {/* <WhyChooseUs /> */}
//         <Service />
//         {/* <FunfactV2 /> */}
//         {/* <Video /> */}
//         {/* <Cta /> */}
//         {/* <Case /> */}
//         {/* <Pricing />
//         <Contact />
//         <BrandV3 />
//         <BlogPost /> */}
//         <Funfact />
//         <TestimonialV2 />
//         <Footer />
//     </div>
// }

// export default Home_V5;

// import React, { useState, useEffect } from 'react';
// import Navbar from './global-components/navbar-v5';
// import Banner from './section-components/banner-v5';
// import Video from './section-components/video';
// import Service from './section-components/service';
// import Funfact from './section-components/funfact-v5';
// import TestimonialV2 from './section-components/testimonial-v2';
// import Footer from './global-components/footer-v2';


// const Home_V5 = () => {
//     const [popupVisible, setPopupVisible] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [rollNumber, setRollNumber] = useState('');
//     const [password, setPassword] = useState('');
//     const [isScrolled, setIsScrolled] = useState(false); // Track if the user has scrolled

//     const handleLogin = (e) => {
//         e.preventDefault();
//         console.log('Login attempted with:', rollNumber, password);
//         setIsLoggedIn(true);
//         setPopupVisible(false);
//         document.body.classList.remove('no-scroll');
//     };

//     const handleScroll = () => {
//         if (window.scrollY > 0 && !isLoggedIn) {
//             setIsScrolled(true); // Mark that user has scrolled
//             setPopupVisible(true); // Show the login popup after scrolling
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [isLoggedIn]);

//     useEffect(() => {
//         if (popupVisible) {
//             document.body.classList.add('no-scroll'); // Disable scrolling when popup is open
//         } else {
//             document.body.classList.remove('no-scroll'); // Enable scrolling
//         }
//     }, [popupVisible]);

//     return (
//         <div>
//             {/* Pass isLoggedIn and trigger popup */}
//             <Navbar isLoggedIn={isLoggedIn} triggerLogin={() => setPopupVisible(true)} />

//             {/* First Page: Banner */}
//             <div className={`first-page ${isScrolled && !isLoggedIn ? 'blurred' : ''}`}>
//                 <Banner /><br></br><br></br><br></br><br></br><br></br><br></br>
//                 {!isLoggedIn && !isScrolled && (
//                     <div className="scroll-arrow">
//                         <span className="arrow-down">&#x2193;</span>
//                         <p>Scroll down or login to continue</p>
//                     </div>
//                 )}
//             </div>

//             {/* Other pages - blurred before login */}
//             <div className={`content ${!isLoggedIn ? 'blurred' : ''}`}>
//                 <Video />
//                 <Service />
//                 <Funfact />
//                 <TestimonialV2 />
//                 <Footer />
//             </div>

//             {/* Login Popup */}
//             {popupVisible && !isLoggedIn && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <h2>Login</h2>
//                         <form onSubmit={handleLogin}>
//                             <div className="form-group">
//                                 <label htmlFor="rollNumber">Roll Number</label>
//                                 <input
//                                     type="text"
//                                     id="rollNumber"
//                                     value={rollNumber}
//                                     onChange={(e) => setRollNumber(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="password">Password</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="login-button">LOGIN</button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Home_V5;



// import React, { useState, useEffect } from 'react';
// import Navbar from './global-components/navbar-v5';
// import Banner from './section-components/banner-v5';
// import Video from './section-components/video';
// import Service from './section-components/service';
// import Funfact from './section-components/funfact-v5';
// import TestimonialV2 from './section-components/testimonial-v2';
// import Footer from './global-components/footer-v2';
// import axios from 'axios';

// const Home_V5 = () => {
//     const [popupVisible, setPopupVisible] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [rollNumber, setRollNumber] = useState('');
//     const [password, setPassword] = useState('');
//     const [isScrolled, setIsScrolled] = useState(false); // Track if the user has scrolled
//     const [errorMessage, setErrorMessage] = useState(''); // To store error messages

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         console.log('Login attempted with:', rollNumber, password);

//         try {
//             // Make a POST request to the backend login route
//             const response = await axios.post('http://localhost:9001/login', {
//                 rollno: rollNumber,
//                 password: password,
//             });

//             if (response.status === 200) {
//                 setIsLoggedIn(true);
//                 setPopupVisible(false);
//                 document.body.classList.remove('no-scroll');
//                 setErrorMessage(''); // Clear any previous error messages
//             }
//         } catch (error) {
//             if (error.response) {
//                 // Request made and server responded
//                 setErrorMessage(error.response.data.message);
//             } else {
//                 // Something happened in setting up the request that triggered an Error
//                 setErrorMessage('Login failed. Please try again.');
//             }
//         }
//     };

//     const handleScroll = () => {
//         if (window.scrollY > 0 && !isLoggedIn) {
//             setIsScrolled(true); // Mark that user has scrolled
//             setPopupVisible(true); // Show the login popup after scrolling
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [isLoggedIn]);

//     useEffect(() => {
//         if (popupVisible) {
//             document.body.classList.add('no-scroll'); // Disable scrolling when popup is open
//         } else {
//             document.body.classList.remove('no-scroll'); // Enable scrolling
//         }
//     }, [popupVisible]);

//     return (
//         <div>
//             {/* Pass isLoggedIn and trigger popup */}
//             <Navbar isLoggedIn={isLoggedIn} triggerLogin={() => setPopupVisible(true)} />

//             {/* First Page: Banner */}
//             <div className={`first-page ${isScrolled && !isLoggedIn ? 'blurred' : ''}`}>
//                 <Banner /><br /><br /><br /><br /><br /><br /><br />
//                 {!isLoggedIn && !isScrolled && (
//                     <div className="scroll-arrow">
//                         <span className="arrow-down">&#x2193;</span>
//                         <p>Scroll down or login to continue</p>
//                     </div>
//                 )}
//             </div>

//             {/* Other pages - blurred before login */}
//             <div className={`content ${!isLoggedIn ? 'blurred' : ''}`}>
//                 <Video />
//                 <Service />
//                 <Funfact />
//                 <TestimonialV2 />
//                 <Footer />
//             </div>

//             {/* Login Popup */}
//             {popupVisible && !isLoggedIn && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <h2>Login</h2>
//                         <form onSubmit={handleLogin}>
//                             <div className="form-group">
//                                 <label htmlFor="rollNumber">Roll Number</label>
//                                 <input
//                                     type="text"
//                                     id="rollNumber"
//                                     value={rollNumber}
//                                     onChange={(e) => setRollNumber(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="password">Password</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="login-button">LOGIN</button>
//                         </form>
//                         {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
// export default Home_V5;


import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../axios'; // Import Axios
import Navbar from './global-components/navbar-v5';
import Banner from './section-components/banner-v5';
import Video from './section-components/video';
import Service from './section-components/service';
import Funfact from './section-components/funfact-v5';
import TestimonialV2 from './section-components/testimonial-v2';
import Footer from './global-components/footer-v2';


const Home_V5 = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [rollNumber, setRollNumber] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); // For navigation

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);

        if (!loggedIn) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, []);

    // Inside your Home_V5 component
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Login attempted with:', rollNumber, password);

        try {
            // Send POST request to the login endpoint
            // const response = await axios.post('http://localhost:9001/login', {
            //     rollno: rollNumber,
            //     password: password,
            // });
            const response = await axios.post('/login', {
                rollno: rollNumber,
                password: password,
            });

            // If login is successful, update state and localStorage
            if (response.status === 200) {
                console.log(response.data.message);
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('rollNumber', rollNumber); // Store roll number in local storage

                // Redirect to the profile page
                // history.push('/profile'); // Change this to your profile route

                // Hide login popup and allow scrolling
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

    // Handle logout logic
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        setPopupVisible(false);
        setShowForm(false);
        setRollNumber('');
        setPassword('');
        setHasScrolled(false); // Reset the scroll state
        history.push('/'); // Navigate to home on logout
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
                <Banner /><br /><br /><br /><br /><br /><br /><br />
                <Video />
                <Service />
                <Funfact />
                <TestimonialV2 />
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
                            position: 'relative'
                        }}
                    >


                        <div className="bus-container">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/bus_moving.gif`}
                            alt="Moving Bus"
                            className="bus-icon"
                            />
                        </div>
                        {!showForm && (
                            <>
                                <h2>Login Required</h2>
                                <p>You need to login to view the rest of the website.</p>
                                <button
                                    onClick={() => setShowForm(true)}
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#ff7200',
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
                                        backgroundColor: '#ff7200',
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
export default Home_V5;




