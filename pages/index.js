import React from 'react'
import { Provider } from 'react-redux'
import { initStore } from '../store'
import Home from '../containers/home';

export default class App extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req;
    const store = initStore({}, isServer);
    return { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props);
    this.store = initStore(props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Home />
      </Provider>
    )
  }
}
