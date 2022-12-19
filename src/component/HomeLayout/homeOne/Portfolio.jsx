import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";

const PortfolioList = [
    
    {
        image: 'image-3',
        // category: 'Development',
        title: 'Ignite Business with Ai'
    },
    {
        image: 'image-4',
        // category: 'Development',
        title: 'Image Analytics Ai'
    },
    {
        image: 'image-1',
        // category: 'Development',
        title: 'Conversational Ai'
    },
    {
        image: 'image-2',
        // category: 'Development',
        title: 'Digital Office'
    }

]






class Portfolio extends Component{
    render(){
        let title = 'Our Works',
        description = 'Lucror is focused in using Face Ai, Vehicle Ai, Fashion Ai, Conversational Ai, Digital Office, RPA, DS, AR or VR to ignite growth or bring more efficiency to sustain in the ever-challenging economic situations.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                
                                <div className="portfolio" key={index}>
                                   { console.log(value,"...", index)}
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4><a href="/portfolio">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/portfolio">Detailed Deck</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;