import React from 'react';
import './Packages.css'
const Packages = () => {
    return (
        <div className="Packages-content ">
            <div className="Packages-title">
                <h2><span className="Packages-title-1">Our</span> <span className="Packages-title-2">Discount Packages</span></h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="pricingTable">
                            <div className="pricing_heading">
                                <h3 className="title">Single Plan</h3>
                                <span className="value">
                                    $222.99
                                    <span className="month">4 DAYS</span>
                                </span>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>Breakfast</li>
                                    <li>Lunch</li>
                                    <li>Dinner</li>
                                    <li>One guider</li>
                                    <li>Business Class Tickit</li>

                                </ul>
                                <div className="link">
                                    <a href="#">BUY NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-6">
                        <div className="pricingTable">
                            <div className="pricing_heading">
                                <h3 className="title">Couple Plan</h3>
                                <span className="value">
                                    $422.99
                                    <span className="month">7 days</span>
                                </span>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>Breakfast</li>
                                    <li>Lunch</li>

                                    <li>Candel Light Dinner</li>
                                    <li>One guider</li>
                                    <li>Business Class Tickit</li>

                                </ul>
                                <div className="link">
                                    <a href="#">BUY NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;