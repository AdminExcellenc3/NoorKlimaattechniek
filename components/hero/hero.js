import React from 'react';
import { Slide } from "react-awesome-reveal";
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

        return (
            <section className="hero hero__style-one bg_img" style={{ backgroundImage: `url(${'/images/bg/hero_bg.jpg'})` }}>
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="hero__content">
                            <Slide direction='up' triggerOnce={'false'} duration={1200}>
                                <h1>Comfortabel & Duurzaam<br /> <span>Airconditioning</span></h1>
                            </Slide>
                            <Slide direction='up' triggerOnce={'false'} duration={1400}>
                                <p>Professionele airconditioning installatie voor uw woning of bedrijf</p>
                            </Slide>
                            <ul className="xb-list list-unstyled mt-40 mb-60">
                                <Slide direction='up' triggerOnce={'false'} duration={1600}>
                                    <li><i className="far fa-check"></i>Verkoeling in de zomer</li>
                                    <li><i className="far fa-check"></i>Warmte in de winter</li>
                                    <li><i className="far fa-check"></i>Schone gefilterde lucht</li>
                                </Slide>
                            </ul>
                            <Slide direction='up' triggerOnce={'false'} duration={1800}>
                                <div>
                                    <div className="btns">
                                        <Link onClick={ClickHandler} className="thm-btn" href="/contact">Contact</Link>
                                        <Link onClick={ClickHandler} className="thm-btn thm-btn--white" href="/over-ons">Over ons</Link>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;