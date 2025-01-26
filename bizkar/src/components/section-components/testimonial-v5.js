import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV5 extends Component {
        componentDidMount() {

      const $ = window.$;
      

        if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }
    }
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        

    return  <section className="testimonials-one testimonials-one__testimonials-page">
  <div className="container">
    <div className="testimonials-one__top">
      <div className="block-title-two text-left">
        <p><span>Clients Say</span></p>
        <h3>know Everything About <br /> Professional Skills</h3>
      </div>{/* /.block-title */}
      <div className="testimonials-one__carousel-btn__wrap">
        <a href="#" className="testimonials-one__carousel-btn-left"><i className="fa fa-angle-double-left" /></a>
        <a href="#" className="testimonials-one__carousel-btn-right"><i className="fa fa-angle-double-right" /></a>
      </div>{/* /.testimonials-one__carousel-btn__wrap */}
    </div>{/* /.testimonials-one__top */}
    <div className="testimonials-one__arrow-decor-wrap">
      <i className="fa fa-angle-right" />
      <i className="fa fa-angle-right" />
      <i className="fa fa-angle-right" />
      <i className="fa fa-angle-right" />
    </div>{/* /.testimonials-one__arrow-decor-wrap */}
    <div className="testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme" data-carousel-prev-btn=".testimonials-one__carousel-btn-left" data-carousel-next-btn=".testimonials-one__carousel-btn-right" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 65, &quot;stagePadding&quot;: 50, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1, &quot;stagePadding&quot;: 20 }, &quot;1199&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
      <div className="item">
        <div className="testimonials-one__single">
          <div className="testimonials-one__image">
            <img src={publicUrl+"assets/images/testimonials/testimonial-1-1.jpg"} alt={ imagealt } />
          </div>{/* /.testimonials-one__image */}
          <div className="testimonials-one__content">
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiumod tempor incididunt ut
              labore e dolore magna aliqua. Ut enim ad miveniam quis nostrud exercitation</p>
            <h3>Pearl Campbell</h3>
            <span>CEO &amp; Founder</span>
            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
          </div>{/* /.testimonials-one__content */}
        </div>{/* /.testimonials-one__single */}
      </div>{/* /.item */}
      <div className="item">
        <div className="testimonials-one__single">
          <div className="testimonials-one__image">
            <img src={publicUrl+"assets/images/testimonials/testimonial-1-2.jpg"} alt={ imagealt } />
          </div>{/* /.testimonials-one__image */}
          <div className="testimonials-one__content">
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiumod tempor incididunt ut
              labore e dolore magna aliqua. Ut enim ad miveniam quis nostrud exercitation</p>
            <h3>Landon Anderson</h3>
            <span>CEO &amp; Founder</span>
            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
          </div>{/* /.testimonials-one__content */}
        </div>{/* /.testimonials-one__single */}
      </div>{/* /.item */}
      <div className="item">
        <div className="testimonials-one__single">
          <div className="testimonials-one__image">
            <img src={publicUrl+"assets/images/testimonials/testimonial-1-3.jpg"} alt={ imagealt } />
          </div>{/* /.testimonials-one__image */}
          <div className="testimonials-one__content">
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiumod tempor incididunt ut
              labore e dolore magna aliqua. Ut enim ad miveniam quis nostrud exercitation</p>
            <h3>Daniel Howell</h3>
            <span>CEO &amp; Founder</span>
            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
          </div>{/* /.testimonials-one__content */}
        </div>{/* /.testimonials-one__single */}
      </div>{/* /.item */}
      <div className="item">
        <div className="testimonials-one__single">
          <div className="testimonials-one__image">
            <img src={publicUrl+"assets/images/testimonials/testimonial-1-1.jpg"} alt={ imagealt } />
          </div>{/* /.testimonials-one__image */}
          <div className="testimonials-one__content">
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiumod tempor incididunt ut
              labore e dolore magna aliqua. Ut enim ad miveniam quis nostrud exercitation</p>
            <h3>Jay Houston</h3>
            <span>CEO &amp; Founder</span>
            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
          </div>{/* /.testimonials-one__content */}
        </div>{/* /.testimonials-one__single */}
      </div>{/* /.item */}
      <div className="item">
        <div className="testimonials-one__single">
          <div className="testimonials-one__image">
            <img src={publicUrl+"assets/images/testimonials/testimonial-1-2.jpg"} alt={ imagealt } />
          </div>{/* /.testimonials-one__image */}
          <div className="testimonials-one__content">
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiumod tempor incididunt ut
              labore e dolore magna aliqua. Ut enim ad miveniam quis nostrud exercitation</p>
            <h3>Austin Houston</h3>
            <span>CEO &amp; Founder</span>
            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
          </div>{/* /.testimonials-one__content */}
        </div>{/* /.testimonials-one__single */}
      </div>{/* /.item */}
      <div className="item">
        <div className="testimonials-one__single">
          <div className="testimonials-one__image">
            <img src={publicUrl+"assets/images/testimonials/testimonial-1-3.jpg"} alt={ imagealt } />
          </div>{/* /.testimonials-one__image */}
          <div className="testimonials-one__content">
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiumod tempor incididunt ut
              labore e dolore magna aliqua. Ut enim ad miveniam quis nostrud exercitation</p>
            <h3>Myrtie Wise</h3>
            <span>CEO &amp; Founder</span>
            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
          </div>{/* /.testimonials-one__content */}
        </div>{/* /.testimonials-one__single */}
      </div>{/* /.item */}
      <div className="item">
        <div className="testimonials-one__single">
          <div className="testimonials-one__image">
            <img src={publicUrl+"assets/images/testimonials/testimonial-1-1.jpg"} alt={ imagealt } />
          </div>{/* /.testimonials-one__image */}
          <div className="testimonials-one__content">
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiumod tempor incididunt ut
              labore e dolore magna aliqua. Ut enim ad miveniam quis nostrud exercitation</p>
            <h3>Ronald Sharp</h3>
            <span>CEO &amp; Founder</span>
            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
          </div>{/* /.testimonials-one__content */}
        </div>{/* /.testimonials-one__single */}
      </div>{/* /.item */}
      <div className="item">
        <div className="testimonials-one__single">
          <div className="testimonials-one__image">
            <img src={publicUrl+"assets/images/testimonials/testimonial-1-2.jpg"} alt={ imagealt } />
          </div>{/* /.testimonials-one__image */}
          <div className="testimonials-one__content">
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiumod tempor incididunt ut
              labore e dolore magna aliqua. Ut enim ad miveniam quis nostrud exercitation</p>
            <h3>Sophia Zimmerman</h3>
            <span>CEO &amp; Founder</span>
            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
          </div>{/* /.testimonials-one__content */}
        </div>{/* /.testimonials-one__single */}
      </div>{/* /.item */}
      <div className="item">
        <div className="testimonials-one__single">
          <div className="testimonials-one__image">
            <img src={publicUrl+"assets/images/testimonials/testimonial-1-3.jpg"} alt={ imagealt } />
          </div>{/* /.testimonials-one__image */}
          <div className="testimonials-one__content">
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiumod tempor incididunt ut
              labore e dolore magna aliqua. Ut enim ad miveniam quis nostrud exercitation</p>
            <h3>Chester Ortiz</h3>
            <span>CEO &amp; Founder</span>
            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
          </div>{/* /.testimonials-one__content */}
        </div>{/* /.testimonials-one__single */}
      </div>{/* /.item */}
    </div>{/* /.testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme */}
  </div>{/* /.container */}
</section>

        }
}

export default TestimonialV5