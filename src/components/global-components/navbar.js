import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
           <header className="site-header-one go-top">
			  <nav className="main-nav__one stricky">
			    <div className="container-fluid">
			      <div className="main-nav__logo-box">
			        <Link to="/">
			          <img src={publicUrl+"assets/images/logo-full-light.png" } alt={ imgattr } />
			        </Link>
			        <a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
			      </div>{/* /.main-nav__logo-box */}
			      <div className="main-nav__main-navigation">
			        <ul className=" main-nav__navigation-box">
			          <li className="dropdown">
			            <Link to="/">Home</Link>
			            <ul>
			              <li><Link to="/home-v2">Home 02</Link></li>
			              <li><Link to="/home-v3">Home 03</Link></li>
			              <li><Link to="/home-v4">Home 04</Link></li>
						  <li><Link to="/home-v5">Home 05</Link></li>
			            </ul>{/* /.sub-menu */}
			          </li>
			          <li>
			            <Link to="/about">About</Link>
			          </li>
			          <li className="dropdown">
			            <a href="#">Services</a>
			            <ul>
			              <li><Link to="/service">Services 01</Link></li>
			              <li><Link to="/service-v2">Services 02</Link></li>
			              <li><Link to="/service-details">Services Details</Link></li>
			            </ul>{/* /.sub-menu */}
			          </li>
			          <li className="dropdown">
			            <a href="#">Work</a>
			            <ul>
			              <li><Link to="/portfolio-standard">Portfolio Standard</Link></li>
			              <li><Link to="/portfolio-full">Portfolio Full</Link></li>
			              <li><Link to="/portfolio-masonary">Portfolio Masonary</Link></li>
			              <li><Link to="/portfolio-details">Portfolio Details</Link></li>
			            </ul>{/* /.sub-menu */}
			          </li>
			          <li className="dropdown">
			            <a href="#">Pages</a>
			            <ul>
			              <li><Link to="/pricing">Pricing</Link></li>
			              <li><Link to="/faq">FAQ</Link></li>
			              <li><Link to="/testimonial">Testimonials</Link></li>
			              <li><Link to="/team">Team</Link></li>
			            </ul>{/* /.sub-menu */}
			          </li>
			          <li className="dropdown">
			            <Link to="/blog-standard">News</Link>
			            <ul>
			              <li><Link to="/blog-grid">News Page</Link></li>
			              <li><Link to="/blog-list">News List</Link></li>
			              <li><Link to="/blog-details">News Details</Link></li>
			            </ul>{/* /.sub-menu */}
			          </li>
			          <li>
			            <Link to="/contact">Contact</Link>
			          </li>
			        </ul>
			      </div>{/* /.main-nav__main-navigation */}
			      <div className="main-nav__right">
			        <Link to="/contact" className="thm-btn">Free Trial <i className="fa fa-angle-right" /></Link>
			        {/* /.thm-btn */}
			      </div>{/* /.main-nav__right */}
			    </div>
			  </nav>
			</header>
        )
    }
}


export default Navbar