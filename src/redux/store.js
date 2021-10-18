import { createStore, compose } from 'redux';
import reducers from './reducers';




export function configureStore() {
    /**
     * Initial state for the store
     */
    const initialState = {}
    /**
     * Composing and activating REDUX DEVTOOLS on the browser   
     */
    const composeEnhament = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    /**
     * Creating and configuring store
     */
    const store = createStore(reducers, initialState, composeEnhament());

    return store;
}