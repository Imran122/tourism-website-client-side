import React from 'react';
import img from '../../images/body/bg-01.jpg'
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://wicked-castle-46477.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Inserted service was successfully')
                    reset();
                }
            })
    };



    return (
        <div>
            <div className="limiter">
                <div className="container-login">
                    <div className="wrap-login">
                        <div className="login-form-title" style={{ backgroundImage: `url(${img})` }}>
                            <span className="login-form-title-1">
                                ADD SERVICE
                            </span>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="login-form validate-form">
                            <div className="wrap-input validate-input m-b-26" data-validate="name is required">
                                <span className="label-input">Service Name</span>
                                <input {...register("name")} className="input" type="text" name="name" placeholder="Enter name" />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input validate-input m-b-26" data-validate="details is required">
                                <span className="label-input">About Service</span>
                                <input {...register("about")} className="input" type="text" name="about" placeholder="Enter about services" />
                                <span className="focus-input"></span>
                            </div>

                            <div className="wrap-input validate-input m-b-18" data-validate="Price is required">
                                <span className="label-input">Price</span>
                                <input {...register("price")} className="input" type="text" name="price" placeholder="Enter price" />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input validate-input m-b-18" data-validate="Picture is required">
                                <span className="label-input">Image</span>
                                <input {...register("picture")} className="input" type="text" name="picture" placeholder="Enter image link" />
                                <span className="focus-input"></span>
                            </div>



                            <div className="container-login-form-btn">
                                <button className="login-form-btn">
                                    SUBMIT
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;