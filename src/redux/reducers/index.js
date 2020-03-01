import setTaskReducer from './setTaskReducer';
import modalVisibleReducer from './modalVisibleReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    setTaskReducer,
    modalVisibleReducer,
});

export default rootReducers;
