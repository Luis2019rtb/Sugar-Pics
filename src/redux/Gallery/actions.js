import { IMAGE_GALLERY } from './constants';



export const loadImageList = (list) => ({
    type: IMAGE_GALLERY.LOAD,
    payload: list
})