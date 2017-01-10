import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../components/layout';
import { getKittens } from '../api/kittens';
import * as demoActions from '../actions/demoActions';
class About extends Component {
  componentDidMount() {
    getKittens().then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <Layout title="About us">
        <p>about us</p>
      </Layout>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(demoActions, dispatch);
}

export default connect(mapDispatchToProps)(About);
