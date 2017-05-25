import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../components/layout';
import * as demoActions from '../actions/demoActions';
/**
 * Home component to show basic redux usage with nextjs.
 */
class Home extends Component {
  static propTypes = {
    /**
     * demo string from redux actions.
     */
    demoString: PropTypes.string.isRequired,
    /**
     * redux function from actions to set the string, accepts a string param,
     * if none is passed, it will return the default string set in the action.
     */
    setString: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.changeDemoString = this.changeDemoString.bind(this);
  }

  componentDidMount() {
    const { setString } = this.props;
    console.log('properties: ', this.props);
    alert('setting default demo string to store');
    setString();
  }

  /**
   * Change the demo string to whatever you pass as a parameter. It will set the default string
   * if no parameter is passed.
   * @param {string} theString - String to be passed to show in component.
   */
  changeDemoString(theString: String) {
    const { setString } = this.props;
    console.log('changing demo string to: ', theString);
    setString(theString);
  }

  render() {
    const { demoString } = this.props;
    return (
      <Layout title="Home page">
        <button onClick={() => this.changeDemoString('not the default string')}>
          change demo string of redux store property to 'not the default string'
        </button>
        <button onClick={() => this.changeDemoString()}>
          change back to default
        </button>
        <p>{demoString}</p>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    demoString: state.demoString
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(demoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
