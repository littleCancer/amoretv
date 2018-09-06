import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute2 = ({ component: Component, ...rest }) => {

    let isLogged = localStorage.getItem('token') !== null;

    let hasLicense = true;
    if (!isLogged) {
        hasLicense = localStorage.getItem('license') !==null;
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render = { (props) => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}/>
);

export default PrivateRoute;