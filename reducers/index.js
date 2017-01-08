import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import demoString from './demoReducer';

const rootReducer = combineReducers({
  routing,
  demoString
});

export default rootReducer;