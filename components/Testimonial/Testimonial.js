import React from 'react';
import Slider from "react-slick";
import logo from '/public/images/icon/trustpilot.png'
import rating from '/public/images/icon/tr_rattig.png'
import Image from 'next/image';

const testimonial = [
    {
        id: '01',
        Des: "Er zijn 3 airco's geïnstalleerd bij ons thuis door Ansar Noor klimattechniek. We zijn er super tevreden mee. Ansar heeft ruim de tijd genomen om alles professional te installeren. Noor klimattechniek is zeker een aanrader. Bedankt Ansar",
        Title: 'Harun',
    },
    {
        id: '02',
        Des: "Ansar en zijn collega zijn echte professionals, erg vriendelijk, meedenkend en vakkundig. Ze hebben knap werk afgeleverd.",
        Title: 'Keimpe de Heer',
    },
    {
        id: '03',
        Des: "Snel contact met de mannen, duidelijke prijs opgave zonder addertjes. Professioneel advies. Gisteren hebben ze bij ons airco's geplaatst in de woonkamer en op zolder en ze hebben vakwerk geleverd! Hartstikke bedankt voor alles.",
        Title: 'Mitch Meijer',
    }
]

const Testimonial = () => {
    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slider = React.useRef(null);

    return (
        <section className="testimonial bg_img pt-130 pb-130" style={{ backgroundImage: `url(${'/images/bg/tm_bg.png'})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="sec-title margin-none-md mb-30-xs mb-125">
                            <h2 className="mb-70 wow skewIn">Waarom kiezen voor ons? <br />
                                <span>Onze klanten vertellen</span></h2>
                            <p>Bij Noor Klimaattechniek streven wij ernaar uit om de beste service en kwaliteiten aan onze klanten te leveren. Met een team van professionals op het vakgebied van airconditionings en warmtepompen, staat ons geen uitdaging in de weg.</p>
                        </div>
                        <div className="xb-testimonial__nav ul_li">
                            <div className="tm-nav-item tm-button-prev" onClick={() => slider?.current?.slickPrev()}></div>
                            <div className="tm-nav-item tm-button-next" onClick={() => slider?.current?.slickNext()}></div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="xb-swiper-sliders">
                            <div className="xb-carousel-inner">
                                <div className="xb-testimonial-slider xb-swiper-container">
                                    <Slider ref={slider} {...settings}>
                                        {testimonial.map((testimonial, tsm) => (
                                            <div className="xb-testimonial" key={tsm}>
                                                <div className="xb-item--inner text-center">
                                                    <div className="xb-item--img">
                                                        <Image 
                                                            src={logo} 
                                                            alt="Trustpilot Logo"
                                                            width={150}
                                                            height={50}
                                                        />
                                                    </div>
                                                    <div className="xb-item--content">
                                                        "{testimonial.Des}"
                                                    </div>
                                                    <div className="xb-item--bottom">
                                                        <div className="xb-item--ratting">
                                                            <Image 
                                                                src={rating} 
                                                                alt="5 sterren rating"
                                                                width={100}
                                                                height={20}
                                                            />
                                                        </div>
                                                        <h3 className="xb-item--title">{testimonial.Title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;