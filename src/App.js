import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import HomePage from './containers/HomePage/HomePage';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { authCheckState } from './store/actions';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignin();
  }

  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            { this.props.isAuthenticated ? <Route path="/orders" component={Orders} /> : null }
            <Route path="/builder" component={BurgerBuilder} />
            <Route path='/auth' component={Auth} />
            <Route path='/logout' component={Logout} />  
            <Route path="/" exact component={HomePage} />
            <Redirect to='/' />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignin: () => dispatch(authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
