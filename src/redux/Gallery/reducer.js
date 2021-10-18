import { IMAGE_GALLERY } from './constants';

const INITIAL_STATE = {
    list: []
}
export const imageList = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case (IMAGE_GALLERY.LOAD):

            return {
                ...state.list,
                list: action.payload
            }
        default:
            return state;
    }
}