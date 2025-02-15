import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/hero';
import PartnerSection from '../components/PartnerSection';
import About from '../components/about/about';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';


const HomePage = () => {

    return (
        <Fragment>
            <div>
                <Header />
                <Hero />
                <PartnerSection />
                <About />
                <Testimonial />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;