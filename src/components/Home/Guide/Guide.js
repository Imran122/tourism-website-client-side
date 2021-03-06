import React from 'react';
import './Guide.css'
import img from '../../../images/body/partner.jpg'
const Guide = () => {
    return (
        <div className="guider-content p-5">

            <div className="column ">
                <div className="grid">
                    <div className="half-grid">
                        <div className="text-box">
                            <h2>CEO, BD TRAVEL AGENCY</h2>
                            <h4>EMA WATSON</h4>
                            <p>Ema watson,is the founder and CEO of the agency</p>
                        </div>
                    </div>
                    <div className="half-grid" style={{ backgroundImage: `url(${img})` }}>
                        <div className="left-guider-img"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Guide;