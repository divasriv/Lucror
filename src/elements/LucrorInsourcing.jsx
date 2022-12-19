import React, { Component } from "react";

class LucrorInsourcing extends Component{
    render(){
        let title = 'LucrorInsourcing';
        //description = 'Desc.'
        
        return(
            <React.Fragment>
                {/* Start About Area  */}

                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/verticals/lucrorinsourcing.jpg" alt="LucrorInsourcing"/>                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">Offering the talented industry expertise through process automation and outsourcing; so that you could concentrate on your core competency – the best way to survive in this ever-changing global business pattern is to reduce cost.</p>
                                            <p className="description">We will take care of your routine work and you focus on your business. Managing Accounts, HR, Payroll, legal and IT is our expertise and managing the business is yours. So, let the experts do what they are good at.</p>
                                            <p className="description">Insourcing allows you to stay focused and rejuvenated!!!</p>
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
export default LucrorInsourcing