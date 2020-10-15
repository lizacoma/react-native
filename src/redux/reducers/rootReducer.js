import { combineReducers } from 'redux';
import { stateReducer } from './todos';

const rootReducer = combineReducers({
    stateReducer
});

export default rootReducer;