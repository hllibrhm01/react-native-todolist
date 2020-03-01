import type from '../actions/type';

const initialState = {
  isModalVisible: false
}

const modalVisibleReducer = (state = initialState, action) => {
    switch(action.type) {
        case type.MODAL_VISIBLE:
        let info = action.payload.info;
        return {
            ...state,
            isModalVisible: info
            //isModalVisible: [info, ...state.taskList]
        };
        default:
            return state;
    }
}

export default modalVisibleReducer;
