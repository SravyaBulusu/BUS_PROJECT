// import React from 'react';
// import Navbar from './global-components/navbar-v5';
// import PageHeader from './global-components/page-header';
// import Contact from './section-components/contact';
// import Footer from './global-components/footer-v2';
// import Faq from './section-components/faq';
// const ContactPage = () => {
//     return <div>
//         <Navbar />
//         <PageHeader headertitle="Contact Us"/>
//         <Contact /><br></br><br></br>
//         {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="google-map__contact" allowFullScreen /> */}
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.6586726561754!2d82.0645124736814!3d17.08934061132583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3782e23e8dc385%3A0x9916ae57f5d1f1ad!2sAditya%20University!5e0!3m2!1sen!2sin!4v1729186170657!5m2!1sen!2sin" className="google-map__contact" allowFullScreen></iframe>
//         <br></br><br></br>
//         <Faq />
//         <Footer />
//     </div>
// }

// export default ContactPage



import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../axios';
import Navbar from './global-components/navbar-v5';
import PageHeader from './global-components/page-header';
import Contact from './section-components/contact';
import Footer from './global-components/footer-v2';
import Faq from './section-components/faq';

const ContactPage = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [rollNumber, setRollNumber] = useState('');
    const [password, setPassword] = useState('');
    const [hasScrolled, setHasScrolled] = useState(false);
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
                <PageHeader headertitle="Contact Us" />
                <Contact />
                <br /><br />
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.6586726561754!2d82.0645124736814!3d17.08934061132583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3782e23e8dc385%3A0x9916ae57f5d1f1ad!2sAditya%20University!5e0!3m2!1sen!2sin!4v1729186170657!5m2!1sen!2sin"
                    className="google-map__contact"
                    allowFullScreen
                    title="Aditya University Location"
                ></iframe>
                <br /><br />
                <Faq />
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
                        <h2>Login Required</h2>
                        <p>You need to login to view the rest of the website.</p>
                        {!showForm ? (
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
                        ) : (
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

export default ContactPage;
