// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

// class BannerV5 extends Component {
// 	 componentDidMount() {
// 	 	let publicUrl = process.env.PUBLIC_URL+'/'
//         const cssUrl =   publicUrl + "assets/css/color-2.css";
//         this.addStyle(cssUrl);

//         const $ = window.$;
//         if ($('.thm__owl-carousel').length) {
//             $('.thm__owl-carousel').each(function () {
//                 var Self = $(this);
//                 var carouselOptions = Self.data('options');
//                 var carouselPrevSelector = Self.data('carousel-prev-btn');
//                 var carouselNextSelector = Self.data('carousel-next-btn');
//                 var thmCarousel = Self.owlCarousel(carouselOptions);
//                 if (carouselPrevSelector !== undefined) {
//                     $(carouselPrevSelector).on('click', function () {
//                         thmCarousel.trigger('prev.owl.carousel');
//                         return false;
//                     });
//                 }
//                 if (carouselNextSelector !== undefined) {
//                     $(carouselNextSelector).on('click', function () {
//                         thmCarousel.trigger('next.owl.carousel');
//                         return false;
//                     });
//                 }
//             });
//         }
//         // Reveal Animation
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('revealed');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const bannerContent = document.querySelector('.banner-two__content');
//     if (bannerContent) observer.observe(bannerContent);
//     }

//     addStyle = url => {
//         const style = document.createElement("link");
//         style.href = url;
//         style.rel = "stylesheet";
//         style.async = true;

//         document.head.appendChild(style);


//     }
//     render() {

//         let publicUrl = process.env.PUBLIC_URL+'/'
//         let imagealt = 'image'

//     return <section className="banner-two  go-top">
// 			  <img src={publicUrl+"assets/images/shapes/banner-shape-1-1.png"} alt="Banner" className="banner-two__moc" />
// 			  <div className="banner-two__image-carousel owl-carousel owl-theme thm__owl-carousel" data-options="{&quot;loop&quot;: true, &quot;items&quot;: 1, &quot;margin&quot;: 0, &quot;dots&quot;: false, &quot;nav&quot;: false, &quot;animateOut&quot;: &quot;slideOutDown&quot;, &quot;animateIn&quot;: &quot;fadeIn&quot;, &quot;active&quot;: true, &quot;smartSpeed&quot;: 1000, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;autoplayHoverPause&quot;: false}">
// 			    <div className="item">
// 			      <img src={publicUrl+"assets/images/resources/first_image.jpg"} alt="Banner" />
// 			    </div>{/* /.item */}
// 			    <div className="item">
// 			      <img src={publicUrl+"assets/images/resources/banner-2-2.jpg"} alt="Banner" />
// 			    </div>{/* /.item */}
// 			  </div>{/* /.banner-two__image-carousel */}
// 			  <div className="container">
// 			    <div className="row">
// 			      <div className="col-xl-7">
// 			        <div className="banner-two__content">
// 			          <h3><span>Real-Time </span> <br />GPS Tracking System<br /> for  <em>College Bus Transport</em></h3>
// 			          <p>The Real-Time GPS Bus Tracker is a system that allows students and staff to monitor college bus locations in real-time using GPS technology.</p>
// 			          <Link to="/home-v5" className="thm-btn banner-two__btn">Discover Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn */}
// 			        </div>{/* /.banner-two__content */}
// 			      </div>{/* /.col-xl-7 */}
// 			    </div>{/* /.row */}
// 			  </div>{/* /.container */}
// 			</section>

//         }
// }

// export default BannerV5

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

// // import './BannerV5.css';  // Import the CSS for animation styles

// class BannerV5 extends Component {
//     componentDidMount() {
//         let publicUrl = process.env.PUBLIC_URL + '/';
//         const cssUrl = publicUrl + "assets/css/color-2.css";
//         this.addStyle(cssUrl);

//         const $ = window.$;
//         if ($('.thm__owl-carousel').length) {
//             $('.thm__owl-carousel').each(function () {
//                 var Self = $(this);
//                 var carouselOptions = Self.data('options');
//                 var carouselPrevSelector = Self.data('carousel-prev-btn');
//                 var carouselNextSelector = Self.data('carousel-next-btn');
//                 var thmCarousel = Self.owlCarousel(carouselOptions);
//                 if (carouselPrevSelector !== undefined) {
//                     $(carouselPrevSelector).on('click', function () {
//                         thmCarousel.trigger('prev.owl.carousel');
//                         return false;
//                     });
//                 }
//                 if (carouselNextSelector !== undefined) {
//                     $(carouselNextSelector).on('click', function () {
//                         thmCarousel.trigger('next.owl.carousel');
//                         return false;
//                     });
//                 }
//             });
//         }

//         // Reveal Animation
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('revealed');
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         const bannerContent = document.querySelector('.banner-two__content');
//         if (bannerContent) observer.observe(bannerContent);
//     }

//     addStyle = url => {
//         const style = document.createElement("link");
//         style.href = url;
//         style.rel = "stylesheet";
//         style.async = true;
//         document.head.appendChild(style);
//     }

//     render() {
//         let publicUrl = process.env.PUBLIC_URL + '/';
//         let imagealt = 'image';

//         return (
//             <section className="banner-two go-top">
//                 <img src={publicUrl + "assets/images/shapes/banner-shape-1-1.png"} alt={imagealt} className="banner-two__moc" />

//                 {/* Bubble container for floating bubbles */}
//                 <div className="bubble-container">
//                     <span className="bubble bubble1"></span>
//                     <span className="bubble bubble2"></span>
//                     <span className="bubble bubble3"></span>
//                     <span className="bubble bubble4"></span>
//                 </div>

//                 {/* Rotating circle */}
//                 <div className="rotating-circle"></div>

//                 <div className="banner-two__image-carousel owl-carousel owl-theme thm__owl-carousel" data-options="{&quot;loop&quot;: true, &quot;items&quot;: 1, &quot;margin&quot;: 0, &quot;dots&quot;: false, &quot;nav&quot;: false, &quot;animateOut&quot;: &quot;slideOutDown&quot;, &quot;animateIn&quot;: &quot;fadeIn&quot;, &quot;active&quot;: true, &quot;smartSpeed&quot;: 1000, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;autoplayHoverPause&quot;: false}">
//                     <div className="item">
//                         <img src={publicUrl + "assets/images/resources/first_image.jpg"} alt="Banner" />
//                     </div>
//                     <div className="item">
//                         <img src={publicUrl + "assets/images/resources/banner-2-2.jpg"} alt="Banner" />
//                     </div>
//                 </div>

//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xl-7">
//                             <div className="banner-two__content">
//                                 <h3><span>Real-Time </span><br />GPS Tracking System<br /> for <em>College Bus Transport</em></h3>
//                                 <p>The Real-Time GPS Bus Tracker is a system that allows students and staff to monitor college bus locations in real-time using GPS technology.</p>
//                                 <Link to="/home-v5" className="thm-btn banner-two__btn">Discover Now <i className="fa fa-angle-double-right" /></Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

// export default BannerV5;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

// import './BannerV5.css';  // Import the CSS for animation styles

class BannerV5 extends Component {
    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        const cssUrl = publicUrl + "assets/css/color-2.css";
        this.addStyle(cssUrl);

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

        // Reveal Animation
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            },
            { threshold: 0.1 }
        );

        const bannerContent = document.querySelector('.banner-two__content');
        if (bannerContent) observer.observe(bannerContent);
    }

    addStyle = url => {
        const style = document.createElement("link");
        style.href = url;
        style.rel = "stylesheet";
        style.async = true;
        document.head.appendChild(style);
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        return (
            <section className="banner-two go-top">
                <img src={publicUrl + "assets/images/shapes/banner-shape-1-1.png"} alt={imagealt} className="banner-two__moc" />

                {/* Bubble container for floating bubbles */}
                <div className="bubble-container">
                    <span className="bubble bubble1"></span>
                    <span className="bubble bubble2"></span>
                </div>

                <div className="banner-two__image-carousel owl-carousel owl-theme thm__owl-carousel" data-options="{&quot;loop&quot;: true, &quot;items&quot;: 1, &quot;margin&quot;: 0, &quot;dots&quot;: false, &quot;nav&quot;: false, &quot;animateOut&quot;: &quot;slideOutDown&quot;, &quot;animateIn&quot;: &quot;fadeIn&quot;, &quot;active&quot;: true, &quot;smartSpeed&quot;: 1000, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;autoplayHoverPause&quot;: false}">
                    <div className="item">
                        <img src={publicUrl + "assets/images/resources/first_image.jpg"} alt="Banner" />
                    </div>
                    <div className="item">
                        <img src={publicUrl + "assets/images/resources/banner-2-2.png"} alt="Banner" />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 custom-col">
                            <div className="banner-two__content">
                                <h3><span>Real-Time </span><br />GPS Tracking System<br /> for <em>College Bus Transport</em></h3>
                                <p>The Real-Time GPS Bus Tracker is a system that allows students and staff to monitor college bus locations in real-time using GPS technology.</p>
                                <Link to="/home-v5" className="thm-btn banner-two__btn">Discover Now <i className="fa fa-angle-double-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BannerV5;

