import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Service extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<section className="service-two" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/dotted-patter-1.png)'}}>
		  <div className="container  go-top">
		    <div className="row">
		      <div className="col-lg-5 d-flex">
		        <div className="my-auto">
		          <div className="service-two__block">
		            <div className="block-title-two text-left">
		              <p>Our Services</p>
		              <h3>We Provide Best <br />
		                Services</h3>
		            </div>{/* /.block-title-two */}
		            <p>These services are designed to make bus tracking more convenient, reliable, and transparent. With real-time updates, personalized features, and an easy-to-use interface, our system ensures that users can manage their travel with ease and confidence. </p>
		            <Link to="/home-v5" className="thm-btn">View All Services <i className="fa fa-angle-double-right" /></Link>
		            {/* /.thm-btn */}
		          </div>{/* /.service-two__block */}
		        </div>{/* /.my-auto */}
		      </div>{/* /.col-lg-5 */}
		      <div className="col-lg-7">
		        <div className="service-two__box-wrap">
		          <div className="row">
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-location" />
		                  <h3><a to="/home-v5">FindMyBus</a></h3>
		                  <p>Find My Bus is a real-time bus tracking page that allows users to view the location of their bus.

</p>
		                  <Link to="/home-v5" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-info" />
		                  <h3><a to="/home-v5">Bus Info</a></h3>
		                  <p>Bus info provides details about bus schedules, routes, and real-time updates for passengers.
						  </p>
		                  <Link to="/home-v5" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  {/* <i className="fal fa-paper-plane" /> */}
						  <i className="fal fa-thumbtack" />
		                  <h3><a to="/home-v5">PinMyBus</a></h3>
		                  <p>Ping My Bus is a service that provides updates of your bus with a quick request in you'r own page.
						  </p>
		                  <Link to="/home-v5" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url(assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  <i className="fal fa-comments" />
		                  <h3><a to="/home-v5">Complaints</a></h3>
		                  <p>Complaints are formal expressions of issues that need to be addressed or resolved in your bus.</p>
		                  <Link to="/home-v5" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		          </div>{/* /.row */}
		        </div>{/* /.service-two__box-wrap */}
		      </div>{/* /.col-lg-7 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

        }
}

export default Service