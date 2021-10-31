import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PrivateRoute.css'

//here using rest for store the rest data except children
const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (<div className="d-flex justify-content-center">
            <div className="spinner-border spinner-border-lg" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>)
    }
    return (

        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect

                to={{
                    pathname: "/login",
                    state: { from: location }
                }}

            ></Redirect>}
        >



        </Route>
    );
};

export default PrivateRoute;