import { combineReducers } from 'redux';
import ChartsReducer from './reducer_charts';

const rootReducer = combineReducers({
  charts: ChartsReducer
});

export default rootReducer;
