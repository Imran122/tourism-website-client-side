import React from 'react';
import './PlaceOrder.css';
import axios from 'axios';
import img from '../../images/orderbg.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const PlaceOrder = () => {
    //showing user data
    const { user } = useAuth();
    //services data load method
    const [service, setService] = useState({})
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(response => response.json())
            .then(data => setService(data))
    }, [])

    //order status
    const [status, setStatus] = useState(false)
    //form data submit method
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        data.name = user.displayName
        data.email = user.email;
        data.servicename = service.name;
        data.price = service.price;
        data.status = status
        axios.post('http://localhost:5000/orderlist', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('Inserted success')
                    reset()
                }

            })
    }



    return (
        <>
            <div className="order-items  d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <div className="order-main">
                    <img src={service.picture} className="items-img" alt="..." />
                    <div className="card-body-order">
                        <h2 className="title-items">{service.name} <span className="price">${service.price}</span></h2>
                        <p className="items-text">{service.about}</p>
                    </div>
                </div>
            </div>

            <div className="container-order">

                <form id="order" onSubmit={handleSubmit(onSubmit)}>

                    <h3>Place Order Form</h3>
                    <h4>Make Plan for: <span className="service-order-name">{service.name}</span></h4>
                    <fieldset>
                        <input type="text" {...register("name")} defaultValue={user.displayName} disabled />
                    </fieldset>
                    <fieldset>
                        <input type="email" {...register("email")} defaultValue={user.email} disabled />
                    </fieldset>
                    <fieldset>
                        <input type="text" {...register("servicename")} defaultValue={service.name} disabled />
                    </fieldset>
                    <fieldset>
                        <input type="text" {...register("price")} defaultValue={service.price} disabled />
                    </fieldset>
                    <fieldset>
                        <input type="text" {...register("phone")} />
                    </fieldset>
                    <fieldset>
                        <input type="text" {...register("address")} />
                    </fieldset>

                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>

                </form>
            </div>
        </>
    );
};

export default PlaceOrder;