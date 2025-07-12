// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

// class TestimonialV2 extends Component {

//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'
//         let imagealt = 'image'
//         let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''

//     return  <section className={"testimonials-two "+CustomClass}>
// 			  <div className="container">
// 			    <div className="block-title-two text-center">
// 			      <p>our testimonials</p>
// 			      <h3>What Our Client’s <br /> Say About Us</h3>
// 			    </div>{/* /.block-title-two */}
// 			    <div className="testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;stagePadding&quot;: 0, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1, &quot;stagePadding&quot;: 0 }, &quot;1199&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
// 			      <div className="item">
// 			        <div className="testimonials-two__single">
// 			          <div className="testimonials-two__top">
// 			            <div className="testimonials-two__image">
// 			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-1.png"} alt={ imagealt } />
// 			            </div>{/* /.testimonials-two__image */}
// 			            <div className="testimonials-two__top-content">
// 			              <h3>Sarah M.</h3>
// 			              <span>Student</span>
// 			            </div>{/* /.testimonials-two__top-content */}
// 			          </div>{/* /.testimonials-two__top */}
// 			          <div className="testimonials-two__content">
// 			            <p>This GPS tracking system has made my commute so much easier! I can see exactly when my bus is arriving and avoid waiting around unnecessarily. It’s super accurate and easy to use on my phone too.</p>
// 			          </div>{/* /.testimonials-two__content */}
// 			          <div className="testimonials-two__bottom">
// 			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
// 			            <div className="testimonials-two__stars">
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			            </div>{/* /.testimonials-two__stars */}
// 			          </div>{/* /.testimonials-two__bottom */}
// 			        </div>{/* /.testimonials-two__single */}
// 			      </div>{/* /.item */}
// 			      <div className="item">
// 			        <div className="testimonials-two__single">
// 			          <div className="testimonials-two__top">
// 			            <div className="testimonials-two__image">
// 			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-2.png"} alt={ imagealt } />
// 			            </div>{/* /.testimonials-two__image */}
// 			            <div className="testimonials-two__top-content">
// 			              <h3>David P.</h3>
// 			              <span>Student</span>
// 			            </div>{/* /.testimonials-two__top-content */}
// 			          </div>{/* /.testimonials-two__top */}
// 			          <div className="testimonials-two__content">
// 			            <p>The ‘FindMyBus’ feature is great! I use it every day to track my bus, and the real-time updates are usually spot on. There were a couple of times when the location lagged, but overall, it's reliable and user-friendly</p>
// 			          </div>{/* /.testimonials-two__content */}
// 			          <div className="testimonials-two__bottom">
// 			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
// 			            <div className="testimonials-two__stars">
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			            </div>{/* /.testimonials-two__stars */}
// 			          </div>{/* /.testimonials-two__bottom */}
// 			        </div>{/* /.testimonials-two__single */}
// 			      </div>{/* /.item */}
// 			      <div className="item">
// 			        <div className="testimonials-two__single">
// 			          <div className="testimonials-two__top">
// 			            <div className="testimonials-two__image">
// 			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-3.png"} alt={ imagealt } />
// 			            </div>{/* /.testimonials-two__image */}
// 			            <div className="testimonials-two__top-content">
// 			              <h3> Priya K.</h3>
// 			              <span>Student</span>
// 			            </div>{/* /.testimonials-two__top-content */}
// 			          </div>{/* /.testimonials-two__top */}
// 			          <div className="testimonials-two__content">
// 			            <p>Such a useful website for students and commuters! I love the ability to track multiple buses at once and the detailed bus info section. The ‘PinMyBus’ feature has been a lifesaver for me on busy days.</p>
// 			          </div>{/* /.testimonials-two__content */}
// 			          <div className="testimonials-two__bottom">
// 			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
// 			            <div className="testimonials-two__stars">
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			            </div>{/* /.testimonials-two__stars */}
// 			          </div>{/* /.testimonials-two__bottom */}
// 			        </div>{/* /.testimonials-two__single */}
// 			      </div>{/* /.item */}
// 			      <div className="item">
// 			        <div className="testimonials-two__single">
// 			          <div className="testimonials-two__top">
// 			            <div className="testimonials-two__image">
// 			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-2.png"} alt={ imagealt } />
// 			            </div>{/* /.testimonials-two__image */}
// 			            <div className="testimonials-two__top-content">
// 			              <h3>Michael J.</h3>
// 			              <span>Student</span>
// 			            </div>{/* /.testimonials-two__top-content */}
// 			          </div>{/* /.testimonials-two__top */}
// 			          <div className="testimonials-two__content">
// 			            <p>Excellent service! I’ve been able to avoid missed buses by checking the GPS tracker before heading out. The website is responsive, and the support team quickly resolved.</p>
// 			          </div>{/* /.testimonials-two__content */}
// 			          <div className="testimonials-two__bottom">
// 			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
// 			            <div className="testimonials-two__stars">
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			            </div>{/* /.testimonials-two__stars */}
// 			          </div>{/* /.testimonials-two__bottom */}
// 			        </div>{/* /.testimonials-two__single */}
// 			      </div>{/* /.item */}
// 			      <div className="item">
// 			        <div className="testimonials-two__single">
// 			          <div className="testimonials-two__top">
// 			            <div className="testimonials-two__image">
// 			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-3.png"} alt={ imagealt } />
// 			            </div>{/* /.testimonials-two__image */}
// 			            <div className="testimonials-two__top-content">
// 			              <h3>Anita R.</h3>
// 			              <span>Student</span>
// 			            </div>{/* /.testimonials-two__top-content */}
// 			          </div>{/* /.testimonials-two__top */}
// 			          <div className="testimonials-two__content">
// 			            <p>The website works well for tracking buses in real-time, and I love the clean design. Sometimes the updates are a few minutes off, but that’s expected with any GPS tracking system. Overall, it’s a solid tool!</p>
// 			          </div>{/* /.testimonials-two__content */}
// 			          <div className="testimonials-two__bottom">
// 			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
// 			            <div className="testimonials-two__stars">
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			              <i className="far fa-star" />
// 			            </div>{/* /.testimonials-two__stars */}
// 			          </div>{/* /.testimonials-two__bottom */}
// 			        </div>{/* /.testimonials-two__single */}
// 			      </div>{/* /.item */}

// 			    </div>{/* /.testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme */}
// 			  </div>{/* /.container */}
// 			</section>


//         }
// }

// export default TestimonialV2


import React, { Component } from 'react';

class TestimonialV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          name: "Sarah M.",
          role: "Student",
          gender: "female",
          image: "testimonial-2-3.png",
          review: "This GPS tracking system has made my commute so much easier! I can see exactly when my bus arrive. ",
          stars: 5
        },
        {
          name: "David P.",
          role: "Student",
          gender: "male",
          image: "testimonial-2-2.png",
          review: "The ‘FindMyBus’ feature is great! I use it every day to track my bus, and the real-time updates.",
          stars: 3
        },
        {
          name: "Sindhu M.",
          role: "Student",
          gender: "female",
          image: "testimonial-2-3.png",
          review: "This GPS tracking system has made my commute so much easier! I can see exactly when my bus arrive. ",
          stars: 4
        },
      ],
      showForm: false,
      newReview: {
        name: '',
        role: 'Student',
        review: '',
        gender: 'male',
        stars: 5
      }
    };
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure that the stars value is parsed as an integer
    const updatedValue = name === 'stars' ? parseInt(value, 10) : value;

    this.setState(prevState => ({
      newReview: {
        ...prevState.newReview,
        [name]: updatedValue
      }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { gender, name, review, stars } = this.state.newReview;

    const image = gender === 'male' ? 'testimonial-2-2.png' : 'testimonial-2-3.png';

    this.setState(prevState => ({
      reviews: [
        ...prevState.reviews,
        {
          name,
          role: 'Student',
          review,
          gender,
          stars,
          image
        }
      ],
      newReview: { name: '', role: 'Student', review: '', gender: 'male', stars: 5 },
      showForm: false
    }));
  };

  handleDelete = (index) => {
    this.setState(prevState => {
      const reviews = prevState.reviews.filter((_, i) => i !== index);
      return { reviews };
    });
  };

  render() {
    const publicUrl = process.env.PUBLIC_URL + '/';
    const imagealt = 'avatar image';

    return (
      <section className="testimonials-two">
        <div className="container">
          <div className="block-title-two text-center">
            <p>Our Testimonials</p>
            <h3>What Our Clients Say About Us</h3>
          </div>

          <div className="review-container" style={{ marginBottom: '20px' }}>
            <div className="review-cards" style={{ display: 'flex', overflowX: 'auto', gap: '15px', paddingBottom: '10px' }}>
              {this.state.reviews.map((review, index) => (
                // <div className="review-card" key={index} style={{ flex: '0 0 auto', minWidth: '200px' }}>
                //   <div className="testimonials-two__single">
                //     <div className="testimonials-two__top">
                //       <div className="testimonials-two__image">
                //         <img src={publicUrl + `assets/images/testimonials/${review.image}`} alt={imagealt} style={{ width: '50px', borderRadius: '50%' }} />
                //       </div>
                //       <div className="testimonials-two__top-content">
                //         <h3>{review.name}</h3>
                //         <span>{review.role}</span>
                //       </div>
                //     </div>
                //     <div className="testimonials-two__content">
                //       <p>
                //         {review.review.length > 100 ? `${review.review.substring(0, 100)}...` : review.review}
                //       </p>
                //     </div>
                //     <div className="testimonials-two__bottom">
                //       <i className="far fa-quote-right testimonials-two__quote-icon" />
                //       <div className="testimonials-two__stars">
                //         {[...Array(review.stars)].map((star, i) => (
                //           <i className="far fa-star" key={i} />
                //         ))}
                //       </div>
                //     </div>
                //     <button onClick={() => this.handleDelete(index)} className="btn btn-danger" style={{ marginTop: '10px' }}>
                //       Delete
                //     </button>
                //   </div>
                // </div>
                <div className="review-card" key={index}>
                  <div className="review-card-inner">
                    <div className="testimonials-two__single">
                      <div className="testimonials-two__top">
                        <div className="testimonials-two__image">
                          <img src={publicUrl + `assets/images/testimonials/${review.image}`} alt={imagealt} style={{ width: '50px', borderRadius: '50%' }} />
                        </div>
                        <div className="testimonials-two__top-content">
                          <h3>{review.name}</h3>
                          <span>{review.role}</span>
                        </div>
                      </div>
                      <div className="testimonials-two__content">
                        <p>
                          {review.review.length > 100 ? `${review.review.substring(0, 100)}...` : review.review}
                        </p>
                      </div>
                      <div className="testimonials-two__bottom">
                        <div className="testimonials-two__stars">
                          {[...Array(review.stars)].map((star, i) => (
                            <i className="far fa-star" key={i} />
                          ))}
                        </div>
                        <button onClick={() => this.handleDelete(index)} className="btn btn-danger">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>

          <button onClick={this.toggleForm} className="thm-btn funfact-one__bt" style={{ marginTop: '20px' }}>
            Add Review
          </button>

          {this.state.showForm && (
            <div className="review-form" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
              <h3>Add Your Review</h3>
              <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                  type="text"
                  name="name"
                  value={this.state.newReview.name}
                  onChange={this.handleInputChange}
                  placeholder="Your Name"
                  className="form-control"
                  required
                />
                <textarea
                  name="review"
                  value={this.state.newReview.review}
                  onChange={this.handleInputChange}
                  placeholder="Your Review"
                  className="form-control"
                  required
                  style={{ height: '100px' }}
                />
                <select
                  name="gender"
                  value={this.state.newReview.gender}
                  onChange={this.handleInputChange}
                  className="form-control"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <select
                  name="stars"
                  value={this.state.newReview.stars}
                  onChange={this.handleInputChange}
                  className="form-control"
                >
                  {[1, 2, 3, 4, 5].map(star => (
                    <option key={star} value={star}>{star} Star</option>
                  ))}
                </select>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default TestimonialV2;
