import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiX , FiMenu } from "react-icons/fi"; 
import logoforweb from "./../../images/logo/Logo-for-web_jan29-2.png";


const SocialShare = [
    {/*Social: <FaFacebookF /> , link: 'https://www.facebook.com/'*/},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/lucrorworld'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/lucrorworld'},
    {/*Social: <FaTwitter /> , link: 'https://twitter.com/'*/},
]

class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src={logoforweb} height="100px" alt="Lucror" />;
        }else if(logo === 'dark'){
            logoUrl = <img src={logoforweb} height="100px" alt="Lucror" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src={logoforweb} height="100px" alt="Lucror" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src={logoforweb} height="100px" alt="Lucror" />;
        }else{
            logoUrl = <img src={logoforweb} height="100px" alt="Lucror" />;
        }
        return(
            <header className={`header-area header-style-two header--transparent ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                        
                        <nav className="mainmenunav d-lg-block ml--50">
                                    <ul className="mainmenu">
                                    <li ><Link to="/#">Home</Link></li>
                                    
                                    <li className="has-droupdown"><Link to="#">Verticals</Link>
                                    <ul className="submenu">
                                        <li><Link to="/verticals">LucrorAi</Link></li>
                                        <li><Link to="/verticals">LucrorGrowth</Link></li>
                                        <li><Link to="/verticals">LucrorInsourcing</Link></li>
                                        <li><Link to="/verticals">LucrorInvent</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="#" >About</Link>
                                    <ul className="submenu">
                                        <li><Link to="/about">Identity</Link></li>
                                        <li><Link to="/about">Fury of Fire</Link></li>
                                        
                                        </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/blog" >Works</Link>
                                    <ul className="submenu">
                                    
                                        <li><Link to="/blog-details">Ai Engine</Link></li>
                                        <li><Link to="/blog-details">Food&Beverage</Link></li>
                                        <li><Link to="/blog-details">Fashion&Retail</Link></li>
                                        <li><Link to="/blog-details">Outsourcing</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/#" >Minds</Link>                                  
                                    <ul className="submenu">
                                        <li><Link to="/team">CEO</Link></li>
                                        <li><Link to="/team">Legends</Link></li>                                   
                                    </ul>
                                </li>
                                <li><Link to="/contact" >WHAP-IP</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="header-btn">
                        <a className="rn-btn" href="/contact" >Reach Me</a >
                                {/* <span>WHAP-IP</span> */}
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;