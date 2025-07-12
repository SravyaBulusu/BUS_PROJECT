import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleOne extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-one  go-top">
			  <div className="container">
			    <img src={publicUrl+"assets/images/resources/cta-1-1.png"} alt={ imagealt } className="about-one__moc" />
			    <div className="row justify-content-end">
			      <div className="col-lg-6">
			        <div className="about-one__content">
			          <div className="block-title text-left">
			            <p><span>About Us</span></p>
			            <h3>We Are Specialized In <br /> Business Soluation</h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incid dunt
			            utlabore et dolore magna aliqua. Ut enim ad minim veniam weay.</p>
			          <h4>We Are Always With You</h4>
			          <p>But we must be dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
			            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			            laboris nisi ut aliquip exea commodo consequat</p>
			          <Link to="/about" className="thm-btn about-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			          {/* /.thm-btn */}
			        </div>{/* /.about-one__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default AboutStyleOne