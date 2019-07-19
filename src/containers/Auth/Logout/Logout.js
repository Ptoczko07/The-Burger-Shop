import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import {logout} from '../../../store/actions/index';

class Logout extends Component {
  componentDidMount() {
    this.props.onSignout();
  }

  render() {
    return (
      <Redirect to='/'/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onSignout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout);