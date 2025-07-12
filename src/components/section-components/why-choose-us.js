import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class WhyChooseUs extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="service-one go-top">
          <div className="container">
            <div className="block-title text-center">
              <p><span>Why Like Us</span></p>
              <h3>Success Your Business With <br />
                Establish Agency</h3>
              <div className="block-title__line" />{/* /.block-title__line */}
            </div>{/* /.block-title */}
            <div className="row high-gutter  go-top">
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-1.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">Business Strategy &amp; Market Research</Link></h3>
                      <p>Improve Business</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incid dunt utlab
                    ore et dolore magna aliqua. Ut enim ad minim veniam weay in the sun.</p>
                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-2.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">SEO, PPC &amp; Social
                          Media Soluation</Link></h3>
                      <p>SEO Optimization</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incid dunt utlab
                    ore et dolore magna aliqua. Ut enim ad minim veniam weay in the sun.</p>
                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-3.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">Web Design And
                          Development</Link></h3>
                      <p>Web Soluations</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incid dunt utlab
                    ore et dolore magna aliqua. Ut enim ad minim veniam weay in the sun.</p>
                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>

        }
}

export default WhyChooseUs