import React, { Component } from "react";
import ServiceOne from "../../elements/service/ServiceOne";
import Bg from "../../component/video/bg02.mp4";
// import { NoEmitOnErrorsPlugin } from "webpack"; 
class SliderOne extends Component {
               
  render() {
    const  mystyle = 
    {
    height: "900px",
    width:"max",
    float:"max",
    top:"0px",
    bottom: "20px",
    position:"absolute",
    }
    return (
        <div className="slider-activation">
        
<video className='videoTag' style={mystyle} autoPlay loop muted 
// video-black-overlay="6"
// background-image= {linear-gradient(red, yellow)}
>

    <source src={Bg} type='video/mp4' />
</video>
            {/* Start Single Slide */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
            //  data-black-overlay="6"
             >
            
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <h2 className="title theme-gradient" >A WORLD OF <br /> OPPORTUNITIES. </h2>
                            </div>
                        </div>
                    </div>
                    {/* Start Service Area */}
                    <div className="service-wrapper service-white">
                        <ServiceOne />
                    </div>
                    {/* End Service Area */}
                </div>
            </div> 
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderOne;