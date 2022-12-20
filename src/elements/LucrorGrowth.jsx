import React, { Component } from "react";
class LucrorGrowth extends Component{
    render(){
        let title = 'LucrorGrowth';
       // description = 'Desc.';
        
        return(
            <React.Fragment>
                {/* Start About Area  */}

                        <div className="container" >
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/brand/brand-01.png" alt="LucrorGrowth"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">Connect the best in class brands with customers, distributors, franchisee and partners to grow globally by disrupting traditional brick and mortar models in conducting business.</p>
                                            <p className="description">Every other brand wants to establish an emotional attachment between the brand and the customer, may it be any industry. It’s the matter of endurance by the customer.</p>
                                            <p className="description">Even in this era of AI, brands need to go Global, At Lucror we assist global growth strategy by finding appropriate distributors, dealers, franchisee and partners.</p>
 
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
export default LucrorGrowth