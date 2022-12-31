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

import { HashRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={`/`} component={Demo}/>
                    <Route exact path={`/main-demo`} component={MainDemo}/>
                    <Route exact path={`/dark-main-demo`} component={DarkMainDemo}/>
                    <Route exact path={`/startup`} component={Startup}/>
                    <Route exact path={`/paralax`} component={Paralax}/>

                    <Route exact path={`/digital-agency`} component={DigitalAgency}/>
                    <Route exact path={`/creative-agency`} component={CreativeAgency}/>
                    <Route exact path={`/personal-portfolio`} component={PersonalPortfolio}/>
                    <Route exact path={`/studio-agency`} component={StudioAgency}/>
                    <Route exact path={`/business`} component={Business}/>
                    <Route exact path={`/portfolio-home`} component={HomePortfolio}/>
                    <Route exact path={`/portfolio-landing`} component={PortfolioLanding}/>
                    <Route exact path={`/creative-landing`} component={CreativeLanding}/>
                    <Route exact path={`/home-particles`} component={HomeParticles}/>
                    <Route exact path={`/dark-portfolio-landing`} component={DarkPortfolioLanding}/>
                    <Route exact path={`/designer-portfolio`} component={DesignerPortfolio}/>
                    <Route exact path={`/creative-portfolio`} component={CreativePortfolio}/>
                    <Route exact path={`/interior-landing`} component={InteriorLanding}/>
                    <Route exact path={`/corporate-business`} component={CorporateBusiness}/>


                    {/* Element Layout */}
                    <Route exact path={`/service`} component={Service}/>
                    <Route exact path={`/service-details`} component={ServiceDetails}/>
                    <Route exact path={`/contact`} component={Contact}/>
                    <Route exact path={`/About`} component={About}/>
                    <Route exact path={`/FuryOfFire`} component={FuryOfFire}/>
                    <Route exact path={`/Identity`} component={Identity}/>
                    <Route exact path={`/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`/blog`} component={Blog}/>
                    <Route exact path={`/blog-details`} component={BlogDetails}/>
                    <Route exact path={`/Verticals`} component={Verticals}/>
                    <Route exact path={`/LucrorAi`} component={LucrorAi}/>
                    <Route exact path={`/LucrorGrowth`} component={LucrorGrowth}/>
                    <Route exact path={`/LucrorInsourcing`} component={LucrorInsoucring}/>
                    <Route exact path={`/LucrorInvent`} component={LucrorInvent}/>

                    {/* Blocks Elements  */}
                    <Route exact path={`/team`} component={Team}/>
                    <Route exact path={`/counters`} component={Counters}/>
                    <Route exact path={`/testimonial`} component={Testimonial}/>
                    <Route exact path={`/Portfolio`} component={Portfolio}/>
                    <Route exact path={`/video-popup`} component={VideoPopup}/>
                    <Route exact path={`/gallery`} component={Gallery}/>
                    <Route exact path={`/clint-logo`} component={Brand}/>
                    <Route exact path={`/progressbar`} component={ProgressBar}/>
                    <Route exact path={`/contact-form`} component={ContactForm}/>
                    <Route exact path={`/google-map`} component={GoogleMap}/>
                    <Route exact path={`/columns`} component={Columns}/>
                    <Route exact path={`/pricing-table`} component={PricingTable}/>


                    
                    <Route path={`/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();