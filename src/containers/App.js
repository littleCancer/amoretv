import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../_helpers'
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import PrivateRoute from '../_routes/PrivateRoute';
import { alertActions } from "../actions/alertActions";
import { connect } from 'react-redux';

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

function mapSateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapSateToProps)(App);

export {connectedApp as App};

