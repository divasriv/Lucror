import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
// import GoogleMapReact from 'google-map-react';
// import ContactTwo from "../elements/contact/ContactTwo";
import ContactOne from "../elements/contact/ContactOne";
// import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
// import ContactThree from "../elements/contact/ContactThree";



// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo1.png" />

                 {/* Start Breadcrump Area */}
                 <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Connect With Me</h2>
                                    <p>I am a Solution Driven Professional, who builds consumer-focused websites. I am available for freelance as well as full time roles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactOne />
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
export default Contact
