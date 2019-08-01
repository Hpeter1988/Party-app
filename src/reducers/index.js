import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import registerAuthentication from './registerReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
});

export default rootReducer;
