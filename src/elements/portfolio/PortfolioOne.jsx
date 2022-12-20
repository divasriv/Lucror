import React, { Component } from "react";

const PortfolioList = [
    {
        image: 'image-6',
        // category: 'Development',
        title: "Vehicle Analytics"
    },
    {
        image: 'image-1',
        // category: 'Development',
        title: ' Ignite Business'
    },
    {
        image: 'image-2',
        // category: 'Development',
        title: ' Image Analytics'
    },
    {
        image: 'image-4',
        // category: 'Development',
        title: 'Insourcing'
    },
    {
        image: 'image-3',
        // category: 'Development',
        title: ' Invent'
    },
    {
        image: 'image-5',
        // category: 'Development',
        title: ' '
    }
]

class PortfolioOne extends Component{
    render(){
        return(
            <React.Fragment>
                {PortfolioList.map((value , index) => (
                    <div className="col-lg-3" key={index}>
                        <div className="portfolio">
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
            
        )
    }
}
export default PortfolioOne;