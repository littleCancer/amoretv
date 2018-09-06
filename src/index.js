// Set up your application entry point here...

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

render (
    <Provider store={configureStore()}>

    </Provider>,
    document.getElementById('root')
);