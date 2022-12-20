import React, { Component } from "react";
import { Link } from 'react-router-dom'
class About extends Component{
    render(){ 
        let title = 'About',
        description = 'Ai revolution will transform the way we do business or experience our life, if not adopting it will lead to extinction. Lucror brings the techniques with Intelligence to enable you to be a market leader. Lucror has immense industry and tech expertise to handhold in your new journey from Analysis-2-Analytics and Descriptive-2-Prescriptive solutions using cutting-edge technologies.';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about1.jpg" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                
                                                <h3 className="title"><Link to="/about">Identity </Link></h3>
                                                <p>The Great Dragon</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                            <h3 className="title"><Link to="/about">Fury of Fire</Link></h3>
                                                <p>Fire power of Legends</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;