import React, { Component } from "react";
import {Helmet} from 'react-helmet' 

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} - Lucror World</title>
                    <meta name="description" content="Lucror World" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
