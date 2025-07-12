import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
		  <section className="contact-two">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-5">
		          <div className="contact-two__content">
		            <div className="contact-two__block">
		              <h3>Don't Hesitate To Contact Us</h3>
		              <p>Sed ut perspiciatis unde omnis iste natus erro voluptat accusantium doloremque laudantium
		                totam rem aperiam eaque</p>
		            </div>{/* /.contact-two__block */}
		            <ul className="list-unstyled contact-two__info-list">
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-map-marked" />
		                  Address :
		                </div>{/* /.contact-two__info-list-title */}
		                <p>27 Division St, New York, <br />NY 10002,USA</p>
		              </li>
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-phone" />
		                  Call Us :
		                </div>{/* /.contact-two__info-list-title */}
		                <p><a href="tel:08964712365">08964712365</a></p>
		              </li>
		              <li>
		                <div className="contact-two__info-list-title">
		                  <i className="far fa-envelope" />
		                  Email Us :
		                </div>{/* /.contact-two__info-list-title */}
		                <p><a href="mailto:support@gmail.com">support@gmail.com</a></p>
		              </li>
		            </ul>{/* /.contact-two__info-list */}
		          </div>{/* /.contact-two__content */}
		        </div>{/* /.col-lg-5 */}
		        <div className="col-lg-7">
		          <form action="#" className="contact-two__form">
		            <div className="contact-two__block">
		              <h3>Get In Touch</h3>
		              <p>Sed ut perspiciatis unde omnis iste natus erro voluptat accusantium <br />doloremque laudantium
		                totam rem aperiam eaque</p>
		            </div>{/* /.contact-two__block */}
		            <div className="row">
		              <div className="col-md-6">
		                <input type="text" placeholder="Full Name" />
		              </div>{/* /.col-md-6 */}
		              <div className="col-md-6">
		                <input type="text" placeholder="Email Address" />
		              </div>{/* /.col-md-6 */}
		              <div className="col-md-12">
		                <input type="text" placeholder="Subject" />
		              </div>{/* /.col-md-12 */}
		              <div className="col-md-12">
		                <textarea name="message" placeholder="Message" defaultValue={""} />
		                <button type="submit" className="thm-btn contact-two__btn">Send Message <i className="fa fa-angle-double-right" /></button>{/* /.thm-btn contact-two__btn */}
		              </div>{/* /.col-md-12 */}
		            </div>{/* /.row */}
		          </form>{/* /.contact-two__form */}
		        </div>{/* /.col-lg-7 */}
		      </div>{/* /.row */}
		    </div>{/* /.container */}
		  </section>{/* /.contact-two */}
		  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="google-map__contact" allowFullScreen />
		</div>

        }
}

export default Contact