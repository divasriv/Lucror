import React, { Component } from "react";
import brand1 from "../images/brand/brand-01.png";
import brand2 from "../images/brand/brand-02.png";
import brand3 from "../images/brand/brand-03.png";
import brand4 from "../images/brand/brand-04.png";
import brand5 from "../images/brand/brand-05.png";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='brand-style-div' >
                <ul className="brand-style-2">
                    
                <li>
                        <img src={brand1} alt="Logo Images"/>
                    </li>
                    <li>
                        <img src={brand2} alt="Logo Images"/>
                    </li>
                    <li>
                        <img src={brand3} alt="Logo Images"/>
                    </li>
                    <li>
                        <img src={brand4} alt="Logo Images"/>
                    </li>
                    <li>
                        <img src={brand5} alt="Logo Images"/>
                    </li>
                   
                </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default BrandTwo;