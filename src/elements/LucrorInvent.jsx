import React, { Component } from "react";
import Invent from './Invent.png';


class LucrorInvent extends Component{
    render(){
        let title = 'LucrorInvent';
       // description = 'Desc.'
        return(
            <React.Fragment>
                {/* Start About Area  */}
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src={Invent} alt="LucrorInvent"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">We are always on the hunt for better solutions and brand to make a difference to the global audience.</p>
                                            <p className="description">We are bunch of professionals who have seen the fall of legendary brands and raise of stars out of nowhere to rule the world, be it Kodak, Lehmann brothers, Toshiba, OR Google, Facebook, Linkedin.</p>
                                            <p className="description">Tech won’t magically unleash people’s full potential; the skill, grit and talent will determine which brand thrive in the evolving eco system. We understand the value of human mind and we are always curious to find a brand or solutions which are creative to address the global audience.</p>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                {/* End About Area  */}

            </React.Fragment>
        )
    }
}
export default LucrorInvent