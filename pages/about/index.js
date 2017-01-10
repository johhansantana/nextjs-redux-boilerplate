import React, { Component } from 'react';
import Layout from '../../components/layout';
import { getKittens } from '../../api/kittens';
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
export default About;
