import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { Link } from "react-router-dom"; 
const ServiceList = [
    {
        icon: <FiCast />,
        title: <a href="/verticals">LucrorGrowth</a>,
        description: 'A Global Connect; Brands with partners & franchisees \n to grow globally'
        
    },
    {
        icon: <FiLayers />,
        title: <a href="/verticals">LucrorAi</a>,
        description: 'Power of Disruption; Use artificial intelligence to stay ahead in business'
    },
    {
        icon: <FiUsers />,
        title: <a href="/verticals">LucrorInsourcing</a>,
        description: 'Enliven Business; Outsourcing non-core to focus on core competency'
    },
    {
        icon: <FiMonitor />,
        title: <a href="/verticals">LucrorInvent</a>,
        description: 'A Curious Mind; Endless hunt to offer best solutions for global audience'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Verticals',
        description = 'Ignite business using Ai with innovation at the forefront for Growth. Lucror uses new tech to facilitate growth, outsource non-core to reduce cost and join hands with partners to create a global footprint.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                   { /*<a href="/service-details">*/}
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p style={{textalign: 'center' }}>{val.description}</p>
                                            </div>
                                        </div>
                                    {/*</a>*/}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
