import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi"; 


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

        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px" alt="Lucror" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px"alt="Lucror" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px" alt="Lucror" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px" alt="Lucror" />;
        }else{
            logoUrl = <img src="/assets/images/logo/Logo-for-web_jan29-2.png" height="100px" alt="Lucror" />;
        }
        
        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li ><Link to="/#">Home</Link></li>
                                <li className="has-droupdown"><Link to="/verticals">Verticals</Link>
                                    <ul className="submenu">
                                        <li><Link to="/LucrorAi">LucrorAi</Link></li>
                                        <li><Link to="/LucrorGrowth">LucrorGrowth</Link></li>
                                        <li><Link to="/LucrorInsourcing">LucrorInsourcing</Link></li>
                                        <li><Link to="/LucrorInvent">LucrorInvent</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/about" >About</Link>
                                    <ul className="submenu">
                                        <li><Link to="/identity">Identity</Link></li>
                                        <li><Link to="/furyoffire">Fury of Fire</Link></li>
                                        
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/blog" >Works</Link>
                                    <ul className="submenu">
                                    
                                        <li><Link to="/portfolio">Ai Engine</Link></li>
                                        <li><Link to="/portfolio">Food&Beverage</Link></li>
                                        <li><Link to="/portfolio">Fashion&Retail</Link></li>
                                        <li><Link to="/portfolio">Outsourcing</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav> 
                        <div className="header-btn">
                            <a className="rn-btn" href="/contact" >Reach Me</a>                  
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