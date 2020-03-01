import store from '../store';
import type from './type';

export default modalVisible = (info) => {
    store.dispatch({
        type: type.MODAL_VISIBLE,
        payload: {
          info
        }
    });
}
