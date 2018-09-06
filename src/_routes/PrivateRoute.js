import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    let isLogged = localStorage.getItem('token') !== null;

    let hasLicense = true;
    if (!isLogged) {
        hasLicense = localStorage.getItem('license') !==null;
    }

    
     

};