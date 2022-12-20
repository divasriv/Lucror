// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Home layout
import Demo from './dark/MainDemo';
import MainDemo from './dark/MainDemo';
import Startup from './dark/MainDemo';
import Paralax from './dark/MainDemo';
import HomePortfolio from './dark/MainDemo';
import DigitalAgency from './dark/MainDemo';
import CreativeAgency from './dark/MainDemo';
import PersonalPortfolio from './dark/MainDemo';
import Business from './dark/MainDemo';
import StudioAgency from './dark/MainDemo';
import PortfolioLanding from './dark/MainDemo';
import CreativeLanding from './dark/MainDemo';
import HomeParticles from './dark/MainDemo';
import CreativePortfolio from './dark/MainDemo';
import DesignerPortfolio from './dark/MainDemo';
import InteriorLanding from './dark/MainDemo';
import CorporateBusiness from './dark/MainDemo';

// Dark Home Layout 
import DarkMainDemo from './dark/MainDemo';
import DarkPortfolioLanding from './dark/MainDemo';

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import FuryOfFire from "./elements/About";
import Identity from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";
import Verticals from "./elements/Verticals";
import LucrorAi from "./elements/Verticals";
import LucrorGrowth from "./elements/Verticals";
import LucrorInsoucring from "./elements/Verticals";
import LucrorInvent from "./elements/Verticals";


// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'Lucror/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} component={MainDemo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/dark-main-demo`} component={DarkMainDemo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/startup`} component={Startup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/digital-agency`} component={DigitalAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-agency`} component={CreativeAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/studio-agency`} component={StudioAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/business`} component={Business}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} component={PortfolioLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-landing`} component={CreativeLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} component={HomeParticles}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`} component={DarkPortfolioLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/designer-portfolio`} component={DesignerPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-portfolio`} component={CreativePortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/interior-landing`} component={InteriorLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/corporate-business`} component={CorporateBusiness}/>


                    {/* Element Layout */}
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/furyoffire`} component={FuryOfFire}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/identity`} component={Identity}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/verticals`} component={Verticals}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/LucrorAi`} component={LucrorAi}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/lucrorgrowth`} component={LucrorGrowth}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/lucrorinsourcing`} component={LucrorInsoucring}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/lucrorinvent`} component={LucrorInvent}/>

                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}/>


                    
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();