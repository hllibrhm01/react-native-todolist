//import { type } from '../actions/type';

const setTaskReducer = (state = { taskList: [] }, action) => {
    switch(action.type) {
        case 'SET_TASK':
        let task = action.payload.task;
        return {
            ...state,
            taskList: [task, ...state.taskList]
        };
        default:
            return state;
    }
}

export default setTaskReducer;