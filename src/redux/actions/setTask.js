import store from '../store';
//import { type } from './type';

export default setTask = (task) => {
    store.dispatch({
        type: 'SET_TASK',
        payload: {
            task
        }
    });
}