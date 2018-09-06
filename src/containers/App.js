import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers'
import { Dashboard } from '../containers/Dashboard';
import { LoginPage } from '../containers/LoginPage';

class App extends React.Component {

    constructor(props) {
        super(props);
        const { dispatch } = this.props;

        history.listen((location, action) => {
            dispatch(alertActions.clear())
        });
    }

    render() {
        const { alert } = this.props;

        return (
            <div>
                { alert &&
                          <div className={`alert ${alert.type}`}>{alert.message}</div>
                      }
                      <Router history={history}>
                          <div>
                              <PrivateRoute exact path='/' component={Dashboard} />
                              <Route path='/login' component={LoginPage} />
                          </div>
                      </Router>
            </div>
        );
    }

}