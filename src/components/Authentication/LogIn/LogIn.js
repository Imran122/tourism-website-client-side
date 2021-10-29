import React from 'react';
import img from '../../../images/body/bg-01.jpg'
import { Button } from 'react-bootstrap';
import google from '../../../images/body/google.png'
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    //call google use firebase function 
    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <div class="limiter">
                <div class="container-login">
                    <div class="wrap-login">
                        <div class="login-form-title" style={{ backgroundImage: `url(${img})` }}>
                            <span class="login-form-title-1">
                                Sign In
                            </span>
                        </div>

                        <form class="login-form validate-form">
                            <div class="wrap-input validate-input m-b-26" data-validate="Username is required">
                                <span class="label-input">Username</span>
                                <input class="input" type="text" name="username" placeholder="Enter username" />
                                <span class="focus-input"></span>
                            </div>

                            <div class="wrap-input validate-input m-b-18" data-validate="Password is required">
                                <span class="label-input">Password</span>
                                <input class="input" type="password" name="pass" placeholder="Enter password" />
                                <span class="focus-input"></span>
                            </div>

                            <div class="flex-sb-m w-full p-b-30">
                                <div class="contact-form-checkbox">
                                    <input class="input-checkbox" id="ckb1" type="checkbox" name="remember-me" />
                                    <label class="label-checkbox" for="ckb1">
                                        Remember me
                                    </label>
                                </div>

                                <div>
                                    <a href="#" class="txt1">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>

                            <div class="container-login-form-btn">
                                <button class="login-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div class="social-icon">

                            <Button variant="success" onClick={signInUsingGoogle}
                                className="register-button">
                                <img className="g-icon" src={google} alt="" />
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
