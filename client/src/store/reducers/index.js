import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Main from './reducersMain';
import * as UX from './reducersUX';



export default combineReducers({
  ...Main,
  ...UX,
  routing: routerReducer, // для того, чтобы роутинг работал
});