import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV10 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="cta-eleven  go-top">
              <img src={publicUrl+"assets/images/shapes/cta-shape-2-1.png"} className="cta-eleven__moc-1" alt="cta image" />
              <img src={publicUrl+"assets/images/shapes/cta-shape-2-2.png"} className="cta-eleven__moc-2" alt="cta image" />
              <img src={publicUrl+"assets/images/shapes/cta-shape-2-3.png"} className="cta-eleven__moc-3" alt="cta image" />
              <div className="container">
                <h3>Work With Us</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda <br /> ntium totam
                  rem aperiam eaque ipsa quae ab illo inventore veritatis et </p>
                <Link to="/service-details" className="thm-btn cta-eleven__btn">Read More <i className="fa fa-angle-double-right" /></Link>
                {/* /.thm-btn cta-eleven__btn */}
              </div>{/* /.container */}
            </section>


        }
	}

export default CtaV10