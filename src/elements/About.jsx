import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import logo1 from "../images/logo/logo1.png";



class FuryOfFire extends Component {
    render() {
        let title = 'Fury of Fire';
        //description2 = 'Lucror brings the Ai and Automation to IGNITE business.';
        return (
            <React.Fragment>
                {/* Start About Area  */}

                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5">
                            <div className="thumbnail">
                                <img className="w-100" src="/assets/images/about/furyoffire.jpg" alt="Fury Of Fire" />                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h2 className="title">{title}</h2>
                                    <p className="description">Lucror is a global consortium of industry leaders and professionals who have made their mark in their sphere of work and are known by the legacy they have created over time.</p>
                                    <p className="description">Lucror is about Power of the Brand which is ready to be seen and served around the  WORLD.</p>
                                    <p className="description">Lucror is about the roaring entrepreneurs who are willing to  conquer.</p>
                                    <p className="description">Lucror is about the designer, artist or chef to reveal their unique talent to the global audience.</p>
                                    <p className="description">From Food to Finance, AI to Advertising, Corporate to Creative, Technology to Transformation, Manufacturing to Marketing, Lucror enables your access to its dynamic knowledge and expertise thinktank for every business requirement.</p>
                                    <p className="description">Every individual or brand associated with Lucror acquires unmatched connect to high end expertise and knowledge pool – brings true FIRE POWER of the Great Dragon.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* End About Area  */}

            </React.Fragment>
        )
    }
}



class Identity extends Component {
    render() {
        let title = 'Identity';
        //description2 = 'Lucror brings the Ai and Automation to IGNITE business.';
        return (
            <React.Fragment>
                {/* Start About Area  */}

                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5">
                            <div className="thumbnail">
                                <img className="w-100" src="/assets/images/about/identity.jpg" alt="Identity" />                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h2 className="title">{title}</h2>
                                    <p className="description">Lucror, in Latin, means Acquire, Gain and Save: Every individual or brand associated with Lucror acquires unmatched connect to high end expertise, industry leaders and knowledge pool. We disrupt the conventional models of work while making real difference to people’s lives.</p>
                                    <p className="description"> Lucror Logo Inspired by the Legend: Lucror’s unique brand identity, its logo has been inspired by a powerful mythical creature, The Great Dragon. Known for its truth revealing character and bravery, the Great Dragon is a mentor in mysticism and magic. It always conveys truth to set you free, even if the path is an unchartered territory, ushering in great destinies.</p>
                                    <p className="description"> Lucror’s Brand Identity Created by Leaders of Tomorrow: Lucror’s The Great Dragon Logo was lovingly hand-drawn by 10-year-old Aman, a budding artist, mathematician, musician and a little wizard. Logo and brand colors chosen and designed by 14-year old Zayn, a budding mathematician, artist, sportsman, musician and a fashion icon. </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* End About Area  */}

            </React.Fragment>
        )
    }
}

class About extends Component {
    render() {

        return (
            <React.Fragment>
                <PageHelmet pageTitle='About' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname={logo1} />
                <Breadcrumb title={'About'} />
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <Identity />
                            <br />
                            <FuryOfFire />
                        </div>
                    </div>
                </div>
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />

            </React.Fragment>
        )
    }
}
export default About;
export {
    FuryOfFire,
    Identity
}