import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Home from '../containers/home';
/**
 * Component to show the home container.
 */
class App extends React.Component {
  static getInitialProps({ store, req }) {
    const isServer = !!req;
    return { initialState: store.getState(), isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.initialState, props.isServer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Home />
      </Provider>
    );
  }
}

export default withRedux(initStore)(App);
