// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class NavbarV5 extends Component {

//     render() {
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         let imgattr = 'logo'
//         let anchor = '#'
//         return (
//            <header className="site-header-two site-header-two__ go-top  go-top">
// 			  <nav className="main-nav__two stricky">
// 			    <div className="container">
// 			      <div className="main-nav__logo-box">
// 			        <Link to="/">
// 			          {/* <img src={publicUrl+"assets/images/logo-2-1.png"} alt={ imgattr }/> */}
// 			        </Link>
// 			      </div>{/* /.main-nav__logo-box */}
// 			      <div className="main-nav__main-navigation">
// 			        <ul className=" main-nav__navigation-box">
// 			          <li>
// 			            <Link to="/home-v5">Home</Link>
// 			            {/* <ul>
// 			              <li><Link to="/home-v2">Home 02</Link></li>
// 			              <li><Link to="/home-v3">Home 03</Link></li>
// 			              <li><Link to="/home-v4">Home 04</Link></li>
//                           <li><Link to="/home-v5">Home 05</Link></li>
// 			            </ul> */}
// 			          </li>
// 			          <li>
// 			            <Link to="/about">FindMyBus</Link>
// 			          </li>
// 			          <li className="dropdown">
// 			            <a href="#">Services</a>
// 			            <ul>
// 			              <li><Link to="/service">Services 01</Link></li>
// 			              <li><Link to="/service-v2">Services 02</Link></li>
// 			              <li><Link to="/service-details">Services Details</Link></li>
// 			            </ul>{/* /.sub-menu */}
// 			          </li>
// 			           <li className="dropdown">
// 			            <a href="#">Work</a>
// 			            <ul>
// 			              <li><Link to="/portfolio-standard">Portfolio Standard</Link></li>
// 			              <li><Link to="/portfolio-full">Portfolio Full</Link></li>
// 			              <li><Link to="/portfolio-masonary">Portfolio Masonary</Link></li>
// 			              <li><Link to="/portfolio-details">Portfolio Details</Link></li>
// 			            </ul>{/* /.sub-menu */}
// 			          </li>
// 			          <li className="dropdown">
// 			            <a href="#">Pages</a>
// 			            <ul>
// 			              <li><Link to="/pricing">Pricing</Link></li>
// 			              <li><Link to="/faq">FAQ</Link></li>
// 			              <li><Link to="/testimonial">Testimonials</Link></li>
// 			              <li><Link to="/team">Team</Link></li>
// 			            </ul>{/* /.sub-menu */}
// 			          </li>
// 			           <li className="dropdown">
// 			            <Link to="/blog-standard">News</Link>
// 			            <ul>
// 			              <li><Link to="/blog-grid">News Page</Link></li>
// 			              <li><Link to="/blog-list">News List</Link></li>
// 			              <li><Link to="/blog-details">News Details</Link></li>
// 			            </ul>{/* /.sub-menu */}
// 			          </li>
// 			          <li>
// 			            <Link to="/contact">Contact</Link>
// 			          </li>
// 			        </ul>
// 			      </div>{/* /.main-nav__main-navigation */}
// 			      <div className="main-nav__right">
// 			        <a href="#" className="side-menu__toggler"><span /></a>
// 			      </div>{/* /.main-nav__right */}
// 			    </div>{/* /.container */}
// 			  </nav>{/* /.main-nav__one */}
// 			</header>



//         )
//     }
// }


// export default NavbarV5


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class NavbarV5 extends Component {
//     render() {
//         let publicUrl = process.env.PUBLIC_URL + '/';
//         let imgattr = 'logo';
//         let anchor = '#'

//         return (
//            <header className="site-header-two site-header-two__ go-top">
//               <nav className="main-nav__two stricky">
//                 <div className="container">
//                   <div className="main-nav__logo-box">
//                     <Link to="/">
//                       <img src={publicUrl + "assets/images/app_logo1.png"} alt={imgattr} />
//                     </Link>
//                   </div>{/* /.main-nav__logo-box */}
//                   <div className="main-nav__main-navigation">
//                     <ul className="main-nav__navigation-box">
//                       <li>
//                         <Link to="/home-v5">Home</Link>
//                       </li>
//                       <li>
//                         <Link to="/track-bus">TrackBus</Link>
//                       </li>
//                       <li>
//                         <Link to="/pin-my-bus">Pin MyBus</Link>
//                       </li>
//                       <li>
//                         <Link to="/complaints">Complaints</Link>
//                       </li>
//                       <li>
//                         <Link to="/contact">Contact</Link>
//                       </li>
//                     </ul>
//                   <button className="login_button">LOGIN</button>
//                   </div>{/* /.main-nav__main-navigation */}
//                  <div className="main-nav__right">
//                     <a href="#" className="side-menu__toggler"><span /></a>
//                   </div>{/*/.main-nav__right */} 
//                 </div>{/* /.container */}
//               </nav>{/* /.main-nav__one */}
//             </header>
//         )
//     }
// }

// export default NavbarV5;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class NavbarV5 extends Component {
//     render() {
//         let publicUrl = process.env.PUBLIC_URL + '/';
//         let imgattr = 'logo';

//         return (
//             <header className="site-header-two site-header-two__ go-top">
//                 <nav className="main-nav__two stricky">
//                     <div className="container">
//                         <div className="main-nav__logo-box">
//                             <Link to="/">
//                                 <img src={publicUrl + "assets/images/app_logo1.png"} alt={imgattr} />
//                             </Link>
//                         </div>
//                         <div className="main-nav__main-navigation">
//                             <ul className="main-nav__navigation-box">
//                                 <li>
//                                     <Link to="/home-v5">Home</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/track-bus">TrackBus</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/pin-my-bus">Pin MyBus</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/complaints">Complaints</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/contact">Contact</Link>
//                                 </li>
//                             </ul>
//                             <button className="login_button" onClick={this.props.onLogin}>LOGIN</button>
//                         </div>
//                         <div className="main-nav__right">
//                             <a href="#" className="side-menu__toggler"><span /></a>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//         );
//     }
// }

// export default NavbarV5;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const NavbarV5 = ({ isLoggedIn, onLogout }) => {
//     const [loginState, setLoginState] = useState(false);

//     useEffect(() => {
//         const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
//         setLoginState(loggedIn);
//     }, [isLoggedIn]);


//     return (
//         <header className="site-header-two site-header-two__ go-top">
//             <nav className="main-nav__two stricky">
//                 <div className="container">
//                     <div className="main-nav__logo-box">
//                         <Link to="/">
//                             <img src={process.env.PUBLIC_URL + '/' + "assets/images/app_logo1.png"} alt="logo" />
//                         </Link>
//                     </div>
//                     <div className="main-nav__main-navigation" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <ul className="main-nav__navigation-box" style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}>
//                             <li style={{ margin: '0 15px' }}><Link to="/home-v5">Home</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/track-bus">TrackBus</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/pin-my-bus">Pin MyBus</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/complaints">Complaints</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/contact">Contact</Link></li>
//                         </ul>
//                         {!loginState ? (
//                             <button className="login_button" onClick={() => alert('Open Login Form')} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>
//                                 LOGIN
//                             </button>
//                         ) : (
//                             <div className="profile-section" style={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
//                                 <img
//                                     src={process.env.PUBLIC_URL + '/' + "assets/images/testimonials/testimonial-2-2.png"} // Update this with your profile icon path
//                                     alt="Profile"
//                                     style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '5px' }} // Adjust size as needed
//                                 />
//                                 <Link to="/profile" className="profile-custom-link" style={{ marginRight: '15px', color: '#007bff', textDecoration: 'none' }}>
//                                     Profile
//                                 </Link>
//                                 <button className="logout_button" onClick={onLogout} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="main-nav__right">
//                         <a href="#" className="side-menu__toggler"><span /></a>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default NavbarV5;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const NavbarV5 = ({ isLoggedIn, onLogout }) => {
//     const [loginState, setLoginState] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

//     useEffect(() => {
//         const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
//         setLoginState(loggedIn);
//     }, [isLoggedIn]);

//     const toggleDropdown = () => {
//         setDropdownOpen(prevState => !prevState);
//     };

//     const handleLogout = () => {
//         onLogout();
//         setDropdownOpen(false); // Close dropdown on logout
//     };

//     return (
//         <header className="site-header-two site-header-two__ go-top">
//             <nav className="main-nav__two stricky">
//                 <div className="container">
//                     <div className="main-nav__logo-box">
//                         <Link to="/">
//                             <img src={process.env.PUBLIC_URL + '/' + "assets/images/app_logo1.png"} alt="logo" />
//                         </Link>
//                     </div>
//                     <div className="main-nav__main-navigation" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <ul className="main-nav__navigation-box" style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}>
//                             <li style={{ margin: '0 15px' }}><Link to="/home-v5">Home</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/track-bus">TrackBus</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/pin-my-bus">Pin MyBus</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/complaints">Complaints</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/contact">Contact</Link></li>
//                         </ul>

//                         {!loginState ? (
//                             <button
//                                 className="login_button"
//                                 onClick={() => alert('Open Login Form')}
//                                 style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}
//                             >
//                                 LOGIN
//                             </button>
//                         ) : (
//                             <div className="profile-section" style={{ position: 'relative', marginLeft: '20px' }}>
//                                 <button
//                                     onClick={toggleDropdown}
//                                     onMouseEnter={() => setDropdownOpen(true)} // Open dropdown on hover
//                                     onMouseLeave={() => setDropdownOpen(false)} // Close dropdown when not hovering
//                                     style={{
//                                         backgroundColor: '#007bff',
//                                         color: 'white',
//                                         border: 'none',
//                                         borderRadius: '5px',
//                                         padding: '5px 10px',
//                                         cursor: 'pointer',
//                                     }}
//                                 >
//                                     My Account
//                                 </button>
//                                 {dropdownOpen && (
//                                     <div
//                                         className="dropdown-menu"
//                                         style={{
//                                             position: 'absolute',
//                                             top: '100%', // Position it directly below the button
//                                             left: '0', // Align to the left of the button
//                                             backgroundColor: '#fff',
//                                             border: '1px solid #ddd',
//                                             borderRadius: '5px',
//                                             boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//                                             zIndex: 1000,
//                                             marginTop: '5px',
//                                             width: '150px', // Set a fixed width for the dropdown
//                                         }}
//                                         onMouseEnter={() => setDropdownOpen(true)} // Keep dropdown open while hovering
//                                         onMouseLeave={() => setDropdownOpen(false)} // Close dropdown when not hovering
//                                     >
//                                         <Link to="/profile" style={{ display: 'block', padding: '10px', color: '#007bff', textDecoration: 'none' }}>
//                                             Profile
//                                         </Link>
//                                         <button
//                                             onClick={handleLogout}
//                                             style={{
//                                                 width: '100%',
//                                                 padding: '10px',
//                                                 backgroundColor: 'transparent',
//                                                 color: '#007bff',
//                                                 border: 'none',
//                                                 textAlign: 'left',
//                                                 cursor: 'pointer',
//                                             }}
//                                         >
//                                             Logout
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                     <div className="main-nav__right">
//                         <a href="#" className="side-menu__toggler"><span /></a>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default NavbarV5;





// import React, { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// const NavbarV5 = ({ isLoggedIn, onLogout }) => {
//     const [loginState, setLoginState] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const history = useHistory(); // Hook to programmatically navigate

//     useEffect(() => {
//         const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
//         setLoginState(loggedIn);
//     }, [isLoggedIn]);

//     const toggleDropdown = () => {
//         setDropdownOpen(prevState => !prevState);
//     };

//     // const handleLogout = () => {
//     //     onLogout(); // Call the onLogout function to update state
//     //     setDropdownOpen(false); // Close dropdown on logout
//     //     localStorage.setItem('isLoggedIn', 'false'); // Update local storage
//     //     history.push('/'); // Navigate to the homepage
//     // };
//     const handleLogout = () => {
//         setLoginState(false);
//         localStorage.setItem('isLoggedIn', 'false');
//         window.location.href = '/home-v5'; 
//         setDropdownOpen(false);
//     };

//     return (
//         <header className="site-header-two site-header-two__ go-top">
//             <nav className="main-nav__two stricky">
//                 <div className="container">
//                     <div className="main-nav__logo-box">
//                         <Link to="/">
//                             <img src={process.env.PUBLIC_URL + '/' + "assets/images/app_logo1.png"} alt="logo" />
//                         </Link>
//                     </div>
//                     <div className="main-nav__main-navigation" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <ul className="main-nav__navigation-box" style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}>
//                             <li style={{ margin: '0 15px' }}><Link to="/home-v5">Home</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/track-bus">TrackBus</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/pin-my-bus">Pin MyBus</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/complaints">Complaints</Link></li>
//                             <li style={{ margin: '0 15px' }}><Link to="/contact">Contact</Link></li>
//                         </ul>

//                         {!loginState ? (
//                             <button
//                                 className="login_button"
//                                 onClick={() => alert('Open Login Form')}
//                                 style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}
//                             >
//                                 LOGIN
//                             </button>
//                         ) : (
//                             <div className="profile-section" style={{ position: 'relative', marginLeft: '20px' }}>
//                                 <button
//                                     onClick={toggleDropdown}
//                                     onMouseEnter={() => setDropdownOpen(true)}
//                                     onMouseLeave={() => setDropdownOpen(false)}
//                                     style={{
//                                         backgroundColor: '#007bff',
//                                         color: 'white',
//                                         border: 'none',
//                                         borderRadius: '5px',
//                                         padding: '5px 10px',
//                                         cursor: 'pointer',
//                                     }}
//                                 >
//                                     My Account
//                                 </button>
//                                 {dropdownOpen && (
//                                     <div
//                                         className="dropdown-menu"
//                                         style={{
//                                             position: 'absolute',
//                                             top: '100%',
//                                             left: '0',
//                                             backgroundColor: '#fff',
//                                             border: '1px solid #ddd',
//                                             borderRadius: '5px',
//                                             boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//                                             zIndex: 1000,
//                                             marginTop: '5px',
//                                             width: '150px',
//                                         }}
//                                         onMouseEnter={() => setDropdownOpen(true)}
//                                         onMouseLeave={() => setDropdownOpen(false)}
//                                     >
//                                         <Link to="/profile" style={{ display: 'block', padding: '10px', color: '#007bff', textDecoration: 'none' }}>
//                                             Profile
//                                         </Link>
//                                         <button
//                                             onClick={handleLogout}
//                                             style={{
//                                                 width: '100%',
//                                                 padding: '10px',
//                                                 backgroundColor: 'transparent',
//                                                 color: '#007bff',
//                                                 border: 'none',
//                                                 textAlign: 'left',
//                                                 cursor: 'pointer',
//                                             }}
//                                         >
//                                             Logout
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                     <div className="main-nav__right">
//                         <a href="#" className="side-menu__toggler"><span /></a>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default NavbarV5;


















import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarV5 = ({ isLoggedIn, onLogout }) => {
    const [loginState, setLoginState] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 988);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setLoginState(loggedIn);
        setDropdownOpen(false);
    }, [isLoggedIn]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    const handleLogout = () => {
        setLoginState(false);
        localStorage.setItem('isLoggedIn', 'false');
        window.location.href = '/home-v5'; 
        setDropdownOpen(false);
    };
    

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 988);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="site-header-two site-header-two__ go-top">
            <nav className="main-nav__two stricky">
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="main-nav__logo-box">
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/' + "assets/images/app_logo1.png"} alt="logo" />
                        </Link>
                    </div>

                    {/* Hamburger Icon */}
                    {isMobile ? (
                        <button
                            className="hamburger-icon"
                            onClick={toggleMobileMenu}
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '5px'
                            }}
                        >
                            <div style={{ width: '25px', height: '2px', backgroundColor: '#333', margin: '4px 0' }}></div>
                            <div style={{ width: '25px', height: '2px', backgroundColor: '#333', margin: '4px 0' }}></div>
                            <div style={{ width: '25px', height: '2px', backgroundColor: '#333', margin: '4px 0' }}></div>
                        </button>
                    ) : (
                        // Desktop Menu
                        <div className="main-nav__main-navigation" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <ul className="main-nav__navigation-box" style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}>
                                <li style={{ margin: '0 15px' }}><Link to="/home-v5">Home</Link></li>
                                <li style={{ margin: '0 15px' }}><Link to="/busdata">TrackBus</Link></li>
                                <li style={{ margin: '0 15px' }}><Link to="/pin-my-bus">Pin MyBus</Link></li>
                                <li style={{ margin: '0 15px' }}><Link to="/complaints">Complaints</Link></li>
                                <li style={{ margin: '0 15px' }}><Link to="/contact">Contact</Link></li>
                            </ul>

                            {!loginState ? (
                                <button className="login_button" onClick={() => alert('Open Login Form')} style={{ backgroundColor: '#ff7200', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>
                                    LOGIN
                                </button>
                            ) : (
                                <div className="profile-section" style={{ position: 'relative', marginLeft: '20px' }}>
                                    <button
                                        onClick={toggleDropdown}
                                        style={{
                                            backgroundColor: '#ff7200',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '5px',
                                            padding: '5px 10px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        My Account
                                    </button>
                                    {dropdownOpen && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: '0',
                                            backgroundColor: '#fff',
                                            border: '1px solid #ddd',
                                            borderRadius: '5px',
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                            zIndex: 1000,
                                            marginTop: '5px',
                                            width: '150px',
                                        }}>
                                            <Link to="/profile" style={{ display: 'block', padding: '10px', color: '#007bff', textDecoration: 'none' }}>Profile</Link>
                                            <button onClick={handleLogout} style={{ width: '100%', padding: '10px', backgroundColor: 'transparent', color: '#007bff', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Logout</button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Mobile Menu */}
                    {isMobile && isMobileMenuOpen && (
                        <div className="mobile-menu-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }}>
                            <div className="mobile-menu" style={{ position: 'fixed', top: 0, right: 0, width: '250px', height: '100%', backgroundColor: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', boxShadow: '-2px 0px 5px rgba(0, 0, 0, 0.3)' }}>
                                <button onClick={toggleMobileMenu} style={{ alignSelf: 'flex-end', backgroundColor: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>✕</button>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ margin: '15px 0' }}><Link to="/home-v5" style={{ color: '#000', textDecoration: 'none' }}>Home</Link></li>
                                    <li style={{ margin: '15px 0' }}><Link to="/track-bus" style={{ color: '#000', textDecoration: 'none' }}>TrackBus</Link></li>
                                    <li style={{ margin: '15px 0' }}><Link to="/pin-my-bus" style={{ color: '#000', textDecoration: 'none' }}>Pin MyBus</Link></li>
                                    <li style={{ margin: '15px 0' }}><Link to="/complaints" style={{ color: '#000', textDecoration: 'none' }}>Complaints</Link></li>
                                    <li style={{ margin: '15px 0' }}><Link to="/contact" style={{ color: '#000', textDecoration: 'none' }}>Contact</Link></li>
                                    {loginState && (
                                        <>
                                            <li style={{ margin: '15px 0' }}><Link to="/profile" style={{ color: '#000', textDecoration: 'none' }}>Profile</Link></li>
                                            <li style={{ margin: '15px 0' }}><button onClick={handleLogout} style={{ backgroundColor: 'transparent', color: '#007bff', border: 'none', cursor: 'pointer' }}>Logout</button></li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default NavbarV5;