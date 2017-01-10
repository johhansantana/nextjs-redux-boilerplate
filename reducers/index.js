import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import demoString from './demoReducer';
import kittens from './kittensReducer';

const rootReducer = combineReducers({
  routing,
  demoString,
  kittens
});

export default rootReducer;