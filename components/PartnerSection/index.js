import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import Image from "next/image";

// Import images van nieuwe merken
import daikin from '/public/images/daikin-logo.png'
import mitsubishi from '/public/images/csm_Mitsubishi_Electric_18d7e03602.png'
import panasonic from '/public/images/Panasonic.png'
import vaillant from '/public/images/Vaillant-logo.png'
import nibe from '/public/images/nibe-group-logo-vector.png'
import kiwa from '/public/images/kiwa-nv-logo-vector.png'
import stek from '/public/images/stek-logo.webp'
import vca from '/public/images/VCA_logo_2000x1138px_RGB_2.0-1.png'

const partners = [
    {
        pImg: daikin,
        alt: "Daikin Logo"
    },
    {
        pImg: mitsubishi,
        alt: "Mitsubishi Electric Logo"
    },
    {
        pImg: panasonic,
        alt: "Panasonic Logo"
    },
    {
        pImg: vaillant,
        alt: "Vaillant Logo"
    },
    {
        pImg: nibe,
        alt: "NIBE Logo"
    },
    {
        pImg: kiwa,
        alt: "Kiwa Logo"
    },
    {
        pImg: stek,
        alt: "Stek Logo"
    },
    {
        pImg: vca,
        alt: "VCA Logo"
    }
]

const PartnerSection = (props) => {
    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="brand pt-110 pb-90">
            <div className="container">
                <h2 className="brand-title text-center mb-50">
                    <span><span>Onze merken van de beste kwaliteit</span></span>
                </h2>
                <div className="xb-swiper-sliders brand-slider">
                    <div className="xb-carousel-inner">
                        <div className="xb-swiper-container">
                            <div className="xb-swiper-wrapper">
                                <Slider {...settings}>
                                    {partners.map((partner, pitem) => (
                                        <div className="xb-swiper" key={pitem}>
                                            <Link href="/">
                                                <Image 
                                                    src={partner.pImg} 
                                                    alt={partner.alt}
                                                    width={200}
                                                    height={100}
                                                    style={{
                                                        maxWidth: "100%",
                                                        height: "auto",
                                                        objectFit: "contain"
                                                    }}
                                                />
                                            </Link>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;