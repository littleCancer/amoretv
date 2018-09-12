// Set up your application entry point here...

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import App from './containers/App';

render (
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('app')
);