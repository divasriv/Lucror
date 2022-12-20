import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../header/Header";
import Footer from "../footer/Footer"; 
import logo1 from "../images/logo/logo1.png";


class App extends Component{
    render(){
        return(
            <Fragment>
                <Header headertransparent="header--transparent" colorblack="color--black" logoname={logo1} />
                {this.props.children}

                 {/* Start Back To Top */}
                 <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                <Footer />
               
            </Fragment>
        )
    }
}

export default App;
