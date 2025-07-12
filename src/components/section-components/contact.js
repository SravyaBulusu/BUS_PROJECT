// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

// class Contact extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <section className="contact-one">
// 			  <div className="container">
// 			    <div className="block-title-two text-center">
// 			      <p>get a quote</p>
// 			      <h3>Don't Hesitate To Contact <br /> With Us Get A Call</h3>
// 			    </div>{/* /.block-title-two */}
// 			    <div className="row">
// 			      <div className="col-lg-5">
// 			        <div className="contact-one__box" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/contact-1-1.jpg)'}}>
// 			          <div className="contact-one__box-inner">
// 			            <h3>Do You Have <br /> Any Questions?</h3>
// 			            <p>If you have any inquiries, feedback, or need assistance, please fill out the form below, and we will get back to you as soon as possible.</p>
// 			            <a href="/demo/react/bizkar#/contact" className="thm-btn contact-one__box-btn">Contact Us <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn contact-one__box-btn */}
// 			          </div>{/* /.contact-one__box-inner */}
// 			        </div>{/* /.contact-one__box */}
// 			      </div>{/* /.col-lg-5 */}
// 			      <div className="col-lg-7 d-flex">
// 			        <div className="my-auto">
// 			          <form action="/contact" className="contact-one__form">
// 			            <h3>Plase Fill Up The Form To Contact With Us</h3>
// 			            <p>We’re here to help and answer any questions you might have. Please feel free to get in touch with us using the information below or by filling out the contact form. We look forward to hearing from you!
// 			            </p>
// 			            <div className="row">
// 			              <div className="col-lg-6">
// 			                <div className="contact-one__input-group">
// 			                  <i className="contact-one__input-icon far fa-user" />
// 			                  <input type="text" name="name" placeholder="Your Full Name" />
// 			                </div>{/* /.contact-one__input-group */}
// 			              </div>{/* /.col-lg-6 */}
// 			              <div className="col-lg-6">
// 			                <div className="contact-one__input-group">
// 			                  <i className="contact-one__input-icon far fa-envelope" />
// 			                  <input type="text" required name="email" placeholder="Your Email " />
// 			                </div>{/* /.contact-one__input-group */}
// 			              </div>{/* /.col-lg-6 */}
// 			              <div className="col-lg-6">
// 			                <div className="contact-one__input-group">
// 			                  <select className="selectpicker">
// 			                    <option value>Your Subject</option>
// 			                    <option value="#">Query For Pricing</option>
// 			                    <option value>Query For Busniess</option>
// 			                  </select>{/* /.selectpicker */}
// 			                </div>{/* /.contact-one__input-group */}
// 			              </div>{/* /.col-lg-6 */}
// 			              <div className="col-lg-6">
// 			                <div className="contact-one__input-group">
// 			                  <i className="contact-one__input-icon far fa-phone" />
// 			                  <input type="text" name="phone" placeholder="Your Phone" />
// 			                </div>{/* /.contact-one__input-group */}
// 			              </div>{/* /.col-lg-6 */}
// 			              <div className="col-lg-12">
// 			                <div className="contact-one__input-group">
// 			                  <i className="contact-one__input-icon far fa-pencil-alt" />
// 			                  <textarea name="message" required placeholder="Write Message" defaultValue={""} />
// 			                </div>{/* /.contact-one__input-group */}
// 			              </div>{/* /.col-lg-12 */}
// 			              <div className="col-lg-12">
// 			                <button type="submit" className="thm-btn contact-one__form-btn">Send Message <i className="fa fa-angle-double-right" /></button>
// 			                {/* /.thm-btn contact-one__form-btn */}
// 			              </div>{/* /.col-lg-12 */}
// 			            </div>{/* /.row */}
// 			          </form>{/* /.contact-one__form */}
// 			        </div>{/* /.my-auto */}
// 			      </div>{/* /.col-lg-7 */}
// 			    </div>{/* /.row */}
// 			  </div>{/* /.container */}
// 			</section>


//         }
// }

// export default Contact


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Contact extends Component {

//     render() {

//         const publicUrl = process.env.PUBLIC_URL + '/';

//         return (
//             <section className="contact-one">
//                 <div className="container">
//                     <div className="block-title-two text-center">
//                         <p>Get a Quote</p>
//                         <h3>Don't Hesitate To Contact <br /> With Us. Get A Call</h3>
//                     </div>{/* /.block-title-two */}
//                     <div className="row">
//                         <div className="col-lg-5">
//                             <div
//                                 className="contact-one__box"
//                                 style={{ backgroundImage: `url(${publicUrl}assets/images/resources/contact-1-1.png)` }}
//                             >
//                                 <div className="contact-one__box-inner">
//                                     <h3>Do You Have <br /> Any Questions?</h3>
//                                     <p>
//                                         If you have any inquiries, feedback, or need assistance, please fill out the form below, and we will get back to you as soon as possible.
//                                     </p>
//                                     <Link to="/contact" className="thm-btn contact-one__box-btn">
//                                         Contact Us <i className="fa fa-angle-double-right" />
//                                     </Link>{/* /.thm-btn contact-one__box-btn */}
//                                 </div>{/* /.contact-one__box-inner */}
//                             </div>{/* /.contact-one__box */}
//                         </div>{/* /.col-lg-5 */}
//                         <div className="col-lg-7 d-flex">
//                             <div className="my-auto">
//                                 <form action="/contact" className="contact-one__form">
//                                     <h3>Please Fill Up The Form To Contact With Us</h3>
//                                     <p>
//                                         We’re here to help and answer any questions you might have. Please feel free to get in touch with us using the information below or by filling out the contact form. We look forward to hearing from you!
//                                     </p>
//                                     <div className="row">
//                                         <div className="col-lg-6">
//                                             <div className="contact-one__input-group">
//                                                 <i className="contact-one__input-icon far fa-user" />
//                                                 <input type="text" name="name" placeholder="Your Full Name" />
//                                             </div>{/* /.contact-one__input-group */}
//                                         </div>{/* /.col-lg-6 */}
//                                         <div className="col-lg-6">
//                                             <div className="contact-one__input-group">
//                                                 <i className="contact-one__input-icon far fa-envelope" />
//                                                 <input type="email" required name="email" placeholder="Your Email" />
//                                             </div>{/* /.contact-one__input-group */}
//                                         </div>{/* /.col-lg-6 */}
//                                         <div className="col-lg-6">
//                                             <div className="contact-one__input-group">
// 												<input type="text" required name="subject" placeholder="Your Subject" />

//                                             </div>{/* /.contact-one__input-group */}
//                                         </div>{/* /.col-lg-6 */}
//                                         <div className="col-lg-6">
//                                             <div className="contact-one__input-group">
//                                                 <i className="contact-one__input-icon far fa-phone" />
//                                                 <input type="tel" name="phone" placeholder="Your Phone" />
//                                             </div>{/* /.contact-one__input-group */}
//                                         </div>{/* /.col-lg-6 */}
//                                         <div className="col-lg-12">
//                                             <div className="contact-one__input-group">
//                                                 <i className="contact-one__input-icon far fa-pencil-alt" />
//                                                 <textarea name="message" required placeholder="Write Message"></textarea>
//                                             </div>{/* /.contact-one__input-group */}
//                                         </div>{/* /.col-lg-12 */}
//                                         <div className="col-lg-12">
//                                             <button type="submit" className="thm-btn contact-one__form-btn">
//                                                 Send Message <i className="fa fa-angle-double-right" />
//                                             </button>
//                                             {/* /.thm-btn contact-one__form-btn */}
//                                         </div>{/* /.col-lg-12 */}
//                                     </div>{/* /.row */}
//                                 </form>{/* /.contact-one__form */}
//                             </div>{/* /.my-auto */}
//                         </div>{/* /.col-lg-7 */}
//                     </div>{/* /.row */}
//                 </div>{/* /.container */}
//             </section>
//         );
//     }
// }

// export default Contact;





import React, { useState } from 'react';
import axios from '../../axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('http://localhost:9001/send-mail', formData);
            const response = await axios.post('/send-mail', formData);

            alert("Message sent successfully!");
            console.log(response.data);
            // Clear form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error("There was an error sending the message!", error);
            alert("Failed to send message, please try again.");
        }
    };

    return (
        <section className="contact-one">
            <div className="container">
                <div className="block-title-two text-center">
                    <p>Get a Quote</p>
                    <h3>Don't Hesitate To Contact <br /> With Us. Get A Call</h3>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-one__box" style={{ backgroundImage: `url(/assets/images/resources/contact-1-1.png)` }}>
                            <div className="contact-one__box-inner">
                                <h3>Do You Have <br /> Any Questions?</h3>
                                <p>
                                    If you have any inquiries, feedback, or need assistance, please fill out the form below, and we will get back to you as soon as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex">
                        <div className="my-auto">
                            <form onSubmit={handleSubmit} className="contact-one__form">
                                <h3>Please Fill Up The Form To Contact With Us</h3>
                                <p>We’re here to help and answer any questions you might have.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="contact-one__input-group">
                                            <i className="contact-one__input-icon far fa-user" />
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Your Full Name" 
                                                onChange={handleChange} 
                                                value={formData.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-one__input-group">
                                            <i className="contact-one__input-icon far fa-envelope" />
                                            <input 
                                                type="email" 
                                                name="email" 
                                                placeholder="Your Email" 
                                                onChange={handleChange} 
                                                value={formData.email} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-one__input-group">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Your Subject" 
                                                onChange={handleChange} 
                                                value={formData.subject}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-one__input-group">
                                            <i className="contact-one__input-icon far fa-phone" />
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                placeholder="Your Phone" 
                                                onChange={handleChange} 
                                                value={formData.phone}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-one__input-group">
                                            <i className="contact-one__input-icon far fa-pencil-alt" />
                                            <textarea 
                                                name="message" 
                                                placeholder="Write Message" 
                                                onChange={handleChange} 
                                                value={formData.message}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" className="thm-btn contact-one__form-btn">
                                            Send Message <i className="fa fa-angle-double-right" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
