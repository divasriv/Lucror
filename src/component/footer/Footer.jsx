import React, { Component } from "react";
import {FaGithub, FaInstagram , FaLinkedinIn} from "react-icons/fa"; 

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/divasri'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/funkiluvsmyle'},
    {Social: <FaGithub /> , link: 'https://www.github.com/divasriv'},
]
// mailtoHref = "mailto:divasriv02@gmail.com?subject=Testing&body=Description";
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Ready To Do This</span>
                                        <h2>Let's Connect</h2>
                                        <a className="rn-button-style--2" href="mailto:divasriv02@gmail.com" >
                                            <span>Reach Me</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Links</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/portfolio">Works</a></li>
                                                    <li><a href="/about">About</a></li>
                                                    <li><a href="/verticals">Verticals</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Say Hello</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:divasriv02@gmail.com" >divasriv02@gmail.com</a></li>
                                                    
                                                    </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;