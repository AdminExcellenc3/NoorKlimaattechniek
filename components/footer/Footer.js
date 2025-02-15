import React from 'react'
import Link from 'next/link'
import icon1 from '/public/images/icon/f_call.svg'
import icon2 from '/public/images/icon/f_mail.svg'
import icon3 from '/public/images/icon/card_img.png'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="site-footer gray-bg pt-65">
            <div className="container">
                <div className="row mt-none-30 pb-60">
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Heeft u vragen of wilt u meer informatie? Neem nu contact met ons op</h3>
                            <ul className="footer__cta list-unstyled mt-50">
                                <li className="ul_li"><span><Image src={icon1} alt="" /></span>+31 85 401 54 75
                                </li>
                                <li className="ul_li"><span><Image src={icon2} alt="" /></span>info@noorklimaat.nl
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Links</h3>
                            <ul className="footer__links list-unstyled">
                                <li><Link onClick={ClickHandler} href="/over-ons"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Over ons</Link></li>
                                <li><Link onClick={ClickHandler} href="/onderhoud-service"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Onderhoud & Service</Link></li>
                                <li><Link onClick={ClickHandler} href="/prijsopgave"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Prijsopgave</Link></li>
                                <li><Link onClick={ClickHandler} href="/privacy-policy"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Airconditioning</h3>
                            <ul className="footer__links list-unstyled">
                                <li><Link onClick={ClickHandler} href="/airconditioning/single-split"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Single split</Link></li>
                                <li><Link onClick={ClickHandler} href="/airconditioning/multi-split"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Multi split</Link></li>
                                <li><Link onClick={ClickHandler} href="/airconditioning/vrf"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>VRF systeem</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Contactgegevens</h3>
                            <ul className="footer__links list-unstyled">
                                <li>Overvliet 78</li>
                                <li>3545 NH Utrecht</li>
                                <li>Tel: +31 85 401 54 75</li>
                                <li>Email: info@noorklimaat.nl</li>
                                <li>KvK: 12345678</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright ul_li_between">
                    <div className="footer__copyright-text mt-15">
                        Copyright © 2024 Noor Klimaat - Alle rechten voorbehouden
                    </div>
                    <div className="footer__copyright-img mt-20">
                        <Image src={icon3} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;