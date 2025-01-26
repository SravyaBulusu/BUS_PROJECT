import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Faq extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="faq-one">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 d-flex">
                  <div className="my-auto">
                    <div className="cta-three__image">
                      <img src={publicUrl+"assets/images/shapes/cta-3-1-shape-2.png"} alt={ imagealt } className="cta-three__image-shape" />
                      <img src={publicUrl+"assets/images/resources/cta-3-1.png"} alt={ imagealt } />
                    </div>{/* /.cta-three__image */}
                  </div>{/* /.my-auto */}
                </div>{/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <div className="faq-one__block">
                    <div className="block-title-two text-left">
                      <h3>Frequently Asked <br /> Questions</h3>
                    </div>{/* /.block-title-two */}
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <div className="accrodion active">
                        <div className="accrodion-title">
                          <h4>Can I track buses on my mobile phone ?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, our website is mobile-friendly, so you can track buses on your smartphone or tablet for convenience while on the go.</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion ">
                        <div className="accrodion-title">
                          <h4>Is the GPS tracking system available 24/7 ?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, our GPS tracking system is available 24/7. However, bus availability and operations depend on the scheduled service hours.</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How do I report an issue with a bus or the tracking system</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>If you're experiencing issues with a bus or the tracking system, you can use the "Complaints" section on our website. Fill out the form with the relevant details, and our support team will address the issue.</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>How do I track a bus in real-time?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>To track a bus in real-time, visit the "FindMyBus" section on our website. Enter the bus route number or select the bus you are looking for, and the current location will be displayed on the map.</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                    </div>
                  </div>{/* /.faq-one__block */}
                </div>{/* /.col-lg-6 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>
        }
}

export default Faq