import { combineReducers } from 'redux';
import employReducer from './employees-reducer';
const rootReducer = combineReducers({
  empl: employReducer,
});

export default rootReducer;
