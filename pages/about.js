import React from 'react'
import { Provider } from 'react-redux'
import { initStore } from '../store'
import About from '../components/about';

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
        <About />
      </Provider>
    )
  }
}
