import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'
const Service = (props) => {
    const { _id, name, price, picture, about } = props.service;
    //using history to show details
    const history = useHistory()
    const handelButton = () => {
        history.push(`/placeorder/${_id}`)
    }
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{about.slice(0, 115)}</p>
                        <div className="card-button d-flex justify-content-center">
                            <Button className="card-btn" onClick={handelButton} >Book Now</Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Service;