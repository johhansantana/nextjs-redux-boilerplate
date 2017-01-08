import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as demoActions from '../../actions/demoActions';
class Home extends Component {
  static propTypes = {
    demoString: PropTypes.string.isRequired,
    setString: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.changeDemoString = this.changeDemoString.bind(this);
  }

  componentDidMount() {
    const { setString } = this.props;
    setString();
  }

  changeDemoString(theString: String) {
    const { setString } = this.props;
    console.log('changing demo string to: ', theString);
    setString(theString);
  }

  render() {
    const { demoString } = this.props;
    return (
      <div>
        <p>{demoString}</p>
        <button
          onClick={() => this.changeDemoString('not the default string')}
        >
          change demo string to 'not the default string'
        </button>
        <button
          onClick={() => this.changeDemoString()}
        >
          change back to default
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    demoString: state.demoString
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(demoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
