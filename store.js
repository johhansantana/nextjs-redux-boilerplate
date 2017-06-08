import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export const initStore = (initialState) => {
  if (typeof window === 'undefined') {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
  } else {
    if (!window.store) {
      window.store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
      );
    }
    return window.store;
  }
};
