import React from 'react';
import './Banner.css'
import img from '../../../images/header/tour.jpg'
const Banner = () => {
    return (
        <div>
            <section className="hero-banner bg-light py-5">
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                            <img src={img} className="img-fluid" alt="Web Development" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mt-3 banner-text-main">BD TRAVEL <span className="trips-texts">AGENCY</span></h1>
                            <p className="lead banner-text  my-5">Travel Agency -Make Plan & explore  beautiful paradise during Travel.</p>
                            <a href="#" className="btn btn-outline-secondary btn-lg border banner-button">SEE MORE</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;