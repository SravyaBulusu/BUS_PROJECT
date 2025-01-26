import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Brand from './section-components/brand-one';
import WhyChooseUs from './section-components/why-choose-us';
import AboutStyleOne from './section-components/about-style-one';
import AboutStyleTwo from './section-components/about-style-two';
import Team from './section-components/team';
import Skill from './section-components/skill';
import Portfolio from './section-components/portfolio-style-one';
import Funfact from './section-components/funfact';
import Testimonial from './section-components/testimonial-style-one';
import CTA from './section-components/cta';
import PostSlider from './section-components/post-slider';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Brand />
        <WhyChooseUs />
        <AboutStyleOne />
        <AboutStyleTwo />
        <Team />
        <Skill />
        <Portfolio />
        <Funfact />
        <Testimonial />
        <CTA />
        <PostSlider />
        <Footer />
    </div>
}

export default Home_V1

