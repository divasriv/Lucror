import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


class HeaderFive extends Component{
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
        document.querySelector('.header-wrapper').classList.remove('menu-open');
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
        
        const { logo, color , headerPosition } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px" alt="Lucror" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px"alt="Lucror" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px" alt="Lucror" />;
        }else if(logo === 'all-dark'){
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px" alt="Lucror" />;
        } else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px" alt="Lucror" />;
        }else{
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px" alt="Lucror" />;
        }
        
        return(
            <header className={`header-area formobile-menu ${headerPosition} ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="header-left">
                                    <div className="logo">
                                        <a href="/">
                                            {logoUrl}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-6">
                                <div className="header-right justify-content-end">
                                    <nav className="mainmenunav d-lg-block">
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
                                        </ul>
                                    </nav>
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
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderFive;