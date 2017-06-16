import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '!/components/layout';
import * as kittensActions from '!/actions/kittensActions';
/**
 * About component to show a list of kittens fetched from an external api.
 * Express api boilerplate with nextJS https://github.com/jsantana90/nextjs-express-boilerplate
 */
class About extends Component {
  static propTypes = {
    /**
     * an array/object response from api call, this is set from redux action.
     */
    kittens: PropTypes.array.isRequired,
    /**
     * A redux function to set the kittens fetched from the api.
     */
    setKittens: PropTypes.func.isRequired
  };
  render() {
    const { kittens } = this.props;
    return (
      <Layout title="About us">
        {kittens
          ? <div>
              <h2>About us</h2>
              <p>We are kittens: </p>
              <ul>
                {kittens.map((cat, index) => {
                  return (
                    <li key={index}>
                      {cat.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          : <p>Loading</p>}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    kittens: state.kittens
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(kittensActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
