import React, { Component } from "react";
import Ai from './Ai.png';

class LucrorAi extends Component {
    render() {
        let title = 'LucrorAi'
        //,
           // description = 'Ai revolution will transform the way we do business or experience our life, if not adopting it will lead to extinction. Lucror brings the techniques and innovations with Intelligence to manage and enable you to be a market leader in your business. \t\t\t Lucror has immense industry and tech expertise to handhold in your new journey from Analysis-2-Analytics and Descriptive-2- Prescriptive solutions using underlying cutting-edge technologies such as Ai, ML, RPA, AR, VR, Neural Network, Data Science, Computer Vision and beyond.'
           ;

        return (
            <React.Fragment>
                {/* Start About Area  */}

                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5">
                            <div className="thumbnail">
                            <img className="w-100" src={Ai} alt="LucrorAi"/>                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h2 className="title">{title}</h2>
                                    <p className="description">Ai revolution will transform the way we do business or experience our life, if not adopting it will lead to extinction. Lucror brings the techniques and innovations with Intelligence to manage and enable you to be a market leader in your business.</p>
                                    <p className="description"> Lucror has immense industry and tech expertise to handhold in your new journey from Analysis-2-Analytics and Descriptive-2- Prescriptive solutions using underlying cutting-edge technologies such as Ai, ML, RPA, AR, VR, Neural Network, Data Science, Computer Vision and beyond.</p>
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
export default LucrorAi