import React from 'react';
import img from '../../../images/body/bg-01.jpg'
import { Button } from 'react-bootstrap';
import google from '../../../images/body/google.png'
import useAuth from '../../../hooks/useAuth';
import { Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';

const LogIn = () => {
    //call google use firebase function 
    const { signInUsingGoogle, isLoading, setIsLoading } = useAuth();
    //redirect after login
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home'
    const handelGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            }).catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    //redicret to upgrade page

    const handelUpgradeButton = () => {
        history.push(`/upgrade`)
    }
    return (
        <div>
            <div className="limiter">
                <div className="container-login">
                    <div className="wrap-login">
                        <div className="login-form-title" style={{ backgroundImage: `url(${img})` }}>
                            <span className="login-form-title-1">
                                Sign In
                            </span>
                        </div>

                        <form className="login-form validate-form">
                            <div className="wrap-input validate-input m-b-26" data-validate="Username is required">
                                <span className="label-input">Username</span>
                                <input className="input" type="text" name="username" placeholder="Enter username" />
                                <span className="focus-input"></span>
                            </div>

                            <div className="wrap-input validate-input m-b-18" data-validate="Password is required">
                                <span className="label-input">Password</span>
                                <input className="input" type="password" name="pass" placeholder="Enter password" />
                                <span className="focus-input"></span>
                            </div>

                            <div className="flex-sb-m w-full p-b-30">
                                <div className="contact-form-checkbox">
                                    <input className="input-checkbox" id="ckb1" type="checkbox" name="remember-me" />
                                    <label className="label-checkbox" for="ckb1">
                                        Remember me
                                    </label>
                                </div>

                                <div>
                                    <a href="#" className="txt1">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>

                            <div className="container-login-form-btn">
                                <button onClick={handelUpgradeButton} className="login-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="social-icon">

                            <Button variant="success" onClick={handelGoogleLogIn}
                                className="register-button">
                                <img className="g-icon" src={google} alt="" disabled />
                                Google
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
