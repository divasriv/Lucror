import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import logo1 from "../images/logo/logo1.png";
import { slickDot  } from "../page-demo/script";

const list = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Ai Engine'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Food&Beverage'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Fashion&Retail'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Outsourcing'
    },

]

// const PortfolioList2 = [
//     {
//         image: 'image-1',
//         category: 'Development',
//         title: ' Ai Engine'
//     },
//     {
//         image: 'image-2',
//         category: 'Development',
//         title: ' Food&Beverage'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Fashion&Retail'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: ' Outsourcing'
//     },

// ]

const Portfolio = () => {
    return (
        <>
            <PageHelmet pageTitle='Counters' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname={logo1} />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Works'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--90 pb--140 bg_color--1">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (

                                                <div className="portfolio" key={index}>
                                                    {/* {console.log(value.image)} */}
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            {/* eslint-disable-next-line*/}
                                                            <h4>
                                                                {/* <a href="#"> */}
                                                                <Link to="#portfolio-details"> 
                                                                    {value.title}
                                                                    </Link>
                                                                    </h4>
                                                            <div className="portfolio-button">
                                                            {/* eslint-disable-next-line*/}
                                                            {/* <a className="rn-btn" href="#">Case Study</a> */}
                                                                <Link className="rn-btn" to="#">Case Study</Link>
                                                            </div>
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
                {/* End Portfolio Area */}

            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}

        </>
        
    )
}

export default Portfolio;