import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'
const Service = (props) => {
    const { _id, name, price, picture, about } = props.service;
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{about.slice(0, 115)}</p>
                        <div className="card-button d-flex justify-content-center">
                            <Button className="card-btn">Book Now</Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Service;