import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import About from '../containers/about';
import * as kittensActions from '../actions/kittensActions';
/**
 * Component to show the about component.
 */
class App extends React.Component {
  static async getInitialProps({ store, req }) {
    const isServer = !!req;
    await store.dispatch(kittensActions.getAsyncKittens());
    return { initialState: store.getState(), isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.initialState, props.isServer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <About />
      </Provider>
    );
  }
}

export default withRedux(initStore)(App);
