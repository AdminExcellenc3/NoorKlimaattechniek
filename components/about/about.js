import React from 'react';
import about from '/public/images/about/about_img.png'
import Image from 'next/image';

const About = (props) => {

    return (
        <section className="about pos-rel pb-130">
            <div className="container">
                <div className="sec-title mb-55">
                <h2 className="mb-30 wow skewIn">De professional in airconditionings <br/>& warmtepompen<span></span></h2>
                   <p>Noor Klimaattechniek bestaat uit een uitgebreid team van gediplomeerde professionals in het vakgebied van airconditionings en warmtepompen.</p>
               </div>
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
            <div className="about__img">
                <Image src={about} alt="" />
            </div>
        </section>
    )
}

export default About;