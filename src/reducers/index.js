import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import findPartyReducer from './myPartyReducer';

const rootReducer = combineReducers({
  findPartyReducer,
  routing: routerReducer,
});

export default rootReducer;
