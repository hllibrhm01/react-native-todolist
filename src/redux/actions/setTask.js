import store from '../store';
import type from './type';

export default setTask = (task) => {
    store.dispatch({
        type: type.SET_TASK,
        payload: {
            task
        }
    });
}
