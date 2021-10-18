
const INIT_STATE = {
    user: { username: '', password: '' },
    loading: false
}



export const auth = (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
}