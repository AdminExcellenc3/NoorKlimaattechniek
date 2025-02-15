import React, { Fragment } from 'react';
import Link from "next/link";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import PartnerSection from '../../components/PartnerSection';
import ContactSection from '../../components/ContactSection';
import aboutImg from '/public/images/air-conditioner-fans.jpg';
import aboutImg2 from '/public/images/mitsubishi-heavy-industries3114.jpg';
import aboutImg3 from '/public/images/parfumm-min.webp';
import Image from 'next/image';

const AboutUsPage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Over Noor Klimaat'} pagesub={'Over ons'} />
            <section className="about pt-130">
                <div className="container">
                    <div className="row mb-40 align-items-center">
                        <div className="col-lg-6">
                            <div className="sec-title mb-20">
                                <h2 className="wow skewIn">De professional in airconditionings <br /> <span>& warmtepompen</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="sec-title mb-20">
                                <p>Noor Klimaattechniek bestaat uit een uitgebreid team van gediplomeerde professionals in het vakgebied van airconditionings en warmtepompen.</p>
                            </div>
                        </div>
                    </div>
                    <div className="xb-about__img">
                        <Image src={aboutImg} alt="Airconditioning installatie" />
                    </div>
                </div>
            </section>
            <section className="about pos-rel pb-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <div className="about__content">
                                <ul className="about-list ul_li list-unstyled">
                                    <li>
                                        <div className="xb-item--inner">
                                            <div className="xb-item--number">1</div>
                                            <div className="xb-item--holder">
                                                <h3 className="xb-item--title mb-10">Verkoeling</h3>
                                                <div className="xb-item--description">
                                                    Niets is beter dan verkoeld zijn in de warme zomer dagen.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="xb-item--inner">
                                            <div className="xb-item--number color-2">2</div>
                                            <div className="xb-item--holder">
                                                <h3 className="xb-item--title mb-10">Warmte in de winter</h3>
                                                <div className="xb-item--description">
                                                    Door inflatie van de gasprijzen, is dit de perfecte alternatief om in de winter warm te blijven.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="xb-item--inner">
                                            <div className="xb-item--number color-3">3</div>
                                            <div className="xb-item--holder">
                                                <h3 className="xb-item--title mb-10">Schone lucht</h3>
                                                <div className="xb-item--description">
                                                    Doordat er een filter in de airconditioning zit, wordt de lucht automatisch schoon gemaakt.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="xb-item--inner">
                                            <div className="xb-item--number color-4">4</div>
                                            <div className="xb-item--holder">
                                                <h3 className="xb-item--title mb-10">Jaren plezier mee</h3>
                                                <div className="xb-item--description">
                                                    Een airconditioning die goed onderhouden wordt, gaat tot wel jaren mee.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mission pt-130 pb-130">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse mt-none-30">
                        <div className="col-lg-6 mt-30">
                            <div className="mission__img text-lg-end">
                                <div className="inner-img d-inline-block wow skewIn" data-wow-delay="200ms">
                                    <Image src={aboutImg2} alt="Airconditioning installatie" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-30">
                            <div className="mission__content">
                                <div className="sec-title">
                                    <h2 className="mb-20 wow skewIn">Professionele installatie <br /> <span>van A tot Z</span></h2>
                                    <p>Bij Noor Klimaattechniek staan wij voor kwaliteit en service. Wij begeleiden u vanaf het eerste contact tot en met de installatie en het onderhoud van uw airconditioning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PartnerSection />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutUsPage;