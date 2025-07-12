// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

// class Video extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'
//         let imagealt = 'image'

//     return  <section className="video-one  go-top">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="video-one__box wow fadeInLeft" data-wow-duration="1500ms">
//                   <img src={publicUrl+"assets/images/resources/video-1-1.jpg"} alt={ imagealt } />
//                   <a href="https://www.youtube.com/watch?v=Rw1JBhaoHBs" className="video-popup video-one__btn"><i className="fa fa-play" /></a>{/* /.video-popup video-one__btn */}
//                 </div>{/* /.video-one__box */}
//               </div>{/* /.col-lg-6 */}
//               <div className="col-lg-6 d-flex">
//                 <div className="my-auto">
//                   <div className="video-one__content">
//                     <div className="block-title-two text-left">
//                       <p>What we do</p>
//                       <h3>Investment Planning <br /> Pays Best Interest.</h3>
//                     </div>{/* /.block-title-two */}
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem
//                       por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//                       exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
//                     <ul className="list-unstyled video-one__list">
//                       <li>
//                         <i className="far fa-check" />
//                         Smashing Book 6 Is Here New Frontiers In Web Design
//                       </li>
//                       <li>
//                         <i className="far fa-check" />
//                         Introduction To Animation And The iMessage App Store With Shruggie
//                       </li>
//                       <li>
//                         <i className="far fa-check" />
//                         Get Your Mobile Site Ready For The 2018 Holiday ways goods
//                       </li>
//                       <li>
//                         <i className="far fa-check" />
//                         Making Distributed Product Teams Work More Efficiently other
//                       </li>
//                     </ul>{/* /.list-unstyled video-one__list */}
//                     <Link to="/about" className="thm-btn">Read More <i className="fa fa-angle-double-right" /></Link>
//                     {/* /.thm-btn */}
//                   </div>{/* /.video-one__content */}
//                 </div>{/* /.my-auto */}
//               </div>{/* /.col-lg-6 */}
//             </div>{/* /.row */}
//           </div>{/* /.container */}
//         </section>

//         }
// }

// export default Video

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Video extends Component {
    
    componentDidMount() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is in view
        });

        // Observe all elements with the class .reveal
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(element => observer.observe(element));
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <section className="video-one go-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-one__box wow fadeInLeft" data-wow-duration="1500ms">
                                <img src={publicUrl + "assets/images/resources/video-1-1.jpg"} alt={imagealt} />
                                <a href="https://www.youtube.com/watch?v=IoAVUAEesvQ" className="video-popup video-one__btn">
                                    <i className="fa fa-play" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="my-auto reveal">
                                <div className="video-one__content">
                                    <div className="block-title-two text-left">
                                        <p>What are the</p>
                                        <h3>Advantages of <br /> Our website</h3>
                                    </div>
                                    <p>The main idea is to develop a real-time tracking system for college buses, which enhances the safety and efficiency of transportation services. The information will be accessible via a user-friendly interface, providing real-time updates on bus movements. This also provides...</p>
                                    <ul className="list-unstyled video-one__list">
                                        <li><i className="far fa-check" /> Enhanced Safety</li>
                                        <li><i className="far fa-check" /> Improved Communication</li>
                                        <li><i className="far fa-check" /> Operational Efficiency</li>
                                        <li><i className="far fa-check" /> Emergency Support</li>
                                    </ul>
                                    <Link to="/home-v5" className="thm-btn">Read More <i className="fa fa-angle-double-right" /></Link>
                                    {/* <img src="public/assests/images/" alt="123x123"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;