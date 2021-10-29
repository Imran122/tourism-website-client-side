import React from 'react';
import './Packages.css'
const Packages = () => {
    return (
        <div className="Packages-content ">
            <div className="Packages-title">
                <h2><span className="Packages-title-1">Our</span> <span className="Packages-title-2">Discount Packages</span></h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-sm-6">
                        <div class="pricingTable">
                            <div class="pricing_heading">
                                <h3 class="title">Single Plan</h3>
                                <span class="value">
                                    $222.99
                                    <span class="month">4 DAYS</span>
                                </span>
                            </div>
                            <div class="content">
                                <ul>
                                    <li>Breakfast</li>
                                    <li>Lunch</li>
                                    <li>Dinner</li>
                                    <li>One guider</li>
                                    <li>Business Class Tickit</li>

                                </ul>
                                <div class="link">
                                    <a href="#">BUY NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 col-sm-6">
                        <div class="pricingTable">
                            <div class="pricing_heading">
                                <h3 class="title">Couple Plan</h3>
                                <span class="value">
                                    $422.99
                                    <span class="month">7 days</span>
                                </span>
                            </div>
                            <div class="content">
                                <ul>
                                    <li>Breakfast</li>
                                    <li>Lunch</li>

                                    <li>Candel Light Dinner</li>
                                    <li>One guider</li>
                                    <li>Business Class Tickit</li>

                                </ul>
                                <div class="link">
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