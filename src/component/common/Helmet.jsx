import React, { Component } from "react";
import {Helmet} from 'react-helmet' 

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} - A World of Opportunities</title>
                    <meta name="description" content="Lucror World - A World of Opportunities" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
