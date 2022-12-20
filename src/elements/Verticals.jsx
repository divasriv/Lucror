import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import LucrorAi from "../elements/LucrorAi";
import LucrorGrowth from "../elements/LucrorGrowth";
import LucrorInsourcing from "../elements/LucrorInsourcing";
import LucrorInvent from "../elements/LucrorInvent";


class Verticals extends Component {
    render() {

        return (
            <React.Fragment>
                <PageHelmet pageTitle='Verticals' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo1.png" />
                <Breadcrumb title={'Verticals'} />
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <LucrorAi />
                            <br />
                            <br />
                            <br />
                            <br />
                            <LucrorGrowth />
                            <br />
                            <br />
                            <br />
                            <br />
                            <LucrorInsourcing />
                            <br />
                            <br />
                            <br />
                            <br />
                            <LucrorInvent />

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

export default Verticals
