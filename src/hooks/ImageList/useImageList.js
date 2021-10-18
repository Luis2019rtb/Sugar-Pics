import { AXIOS_SERVICE_CLASS } from '../../utils';
import { loadImageList } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export const useImageList = () => {

    // hooks
    const Dispatch = useDispatch();


    const URL = `https://pixabay.com/api/`;
    //PixaBay api key from .env variables
    const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_KEY;
    // Axios service object
    let service = new AXIOS_SERVICE_CLASS();

    const loadList = () => {

        service.get(`${URL}?key=${PIXABAY_API_KEY}`, (status, data) => {
            console.log(data.hits)
            Dispatch(
                loadImageList(
                    data.hits
                )
            )
        })
    }



    return () => loadList();
}