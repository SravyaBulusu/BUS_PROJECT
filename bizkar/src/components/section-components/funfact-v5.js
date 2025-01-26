// import React, { Component } from 'react';
// import parse from 'html-react-parser';
// import { Link } from 'react-router-dom';

// class FunfactV5 extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'

//     return <section className="funfact-one funfact-one__home-three">
// 			  <div className="container">
// 			    <div className="row">
// 			      <div className="col-lg-6">
// 			        <div className="funfact-one__home-three-wrap">
// 			          <div className="row ">
// 			            <div className="col-md-6">
// 			              <div className="funfact-one__single">
// 			                <div className="funfact-one__icon">
// 			                  <i className="far fa-user-alt" />
// 			                </div>{/* /.funfact-one__icon */}
// 			                <h3><span className="counter">200</span>{/* /.counter */}+</h3>
// 			                <p>Kakinada Ground</p>
// 			              </div>{/* /.funfact-one__single */}
// 			            </div>{/* /.col-md-6 */}
// 			            <div className="col-md-6">
// 			              <div className="funfact-one__single">
// 			                <div className="funfact-one__icon">
// 			                  <i className="far fa-heart" />
// 			                </div>{/* /.funfact-one__icon */}
// 			                <h3><span className="counter">100</span>{/* /.counter */}+</h3>
// 			                <p>Rajamundry Ground</p>
// 			              </div>{/* /.funfact-one__single */}
// 			            </div>{/* /.col-md-6 */}
// 			            <div className="col-md-6">
// 			              <div className="funfact-one__single">
// 			                <div className="funfact-one__icon">
// 			                  <i className="far fa-cloud-download" />
// 			                </div>{/* /.funfact-one__icon */}
// 			                <h3><span className="counter">150</span>{/* /.counter */}
// 			                +</h3>
// 			                <p>Pithapuram Ground</p>
// 			              </div>{/* /.funfact-one__single */}
// 			            </div>{/* /.col-md-6 */}
// 			            {/* /.col-md-6 */}
// 			          </div>{/* /.row */}
// 			        </div>{/* /.funfact-one__home-three-wrap */}
// 			      </div>{/* /.col-lg-6 */}
// 			      <div className="col-lg-6 d-flex">
// 			        <div className="my-auto">
// 			          <div className="funfact-one__block">
// 			            <div className="block-title-two text-left">
// 			              <h1>Overview of Bus Count Across Different Grounds</h1>
// 			            </div>{/* /.block-title-two text-left */}
// 			            <p>The Bus Count by Grounds displays the number of buses available at each ground within the college. This helps in optimizing bus allocation and ensuring smooth transportation across all areas.</p>
// 			            <Link to="/about" className="thm-btn funfact-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
// 			            {/* /.thm-btn funfact-one__btn */}
// 			          </div>{/* /.funfact-one__block */}
// 			        </div>{/* /.my-auto */}
// 			      </div>{/* /.col-lg-6 */}
// 			    </div>{/* /.row */}
// 			  </div>{/* /.container */}
// 			</section>




//         }
// }

// export default FunfactV5


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FunfactV5 extends Component {

    componentDidMount() {
        const revealElement = document.querySelector('.my-auto');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(revealElement);
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        return (
            <section className="funfact-one funfact-one__home-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="funfact-one__home-three-wrap">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="funfact-one__single">
                                            <div className="funfact-one__icon">
                                                <i className="fal fa-bus" />
                                            </div>
                                            <h3><span className="counter">200</span>+</h3>
                                            <p>Kakinada Ground</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="funfact-one__single">
                                            <div className="funfact-one__icon">
                                                <i className="fal fa-bus" />
                                            </div>
                                            <h3><span className="counter">100</span>+</h3>
                                            <p>Rajamundry Ground</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="funfact-one__single">
                                            <div className="funfact-one__icon">
                                                <i className="fal fa-bus" />
                                            </div>
                                            <h3><span className="counter">150</span>+</h3>
                                            <p>Pithapuram Ground</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="my-auto reveal">
                                <div className="funfact-one__block">
                                    <div className="block-title-two text-left">
                                        <h1>Overview of Bus Count Across Different Grounds</h1>
                                    </div>
                                    <p>The "Bus Count by Grounds" feature provides a clear overview of the number of buses stationed at each ground within the college campus, facilitating optimal bus allocation and ensuring smooth transportation across all areas. By offering real-time data on bus availability, this feature enables both students and staff to make informed decisions about their transportation needs, particularly during peak hours or special events.</p><br></br>
                                    <Link to="/home-v5" className="thm-btn funfact-one__bt">Read More <i className="fa fa-angle-double-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunfactV5;