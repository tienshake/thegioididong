import {
    POST_LOGIN
} from "../const/index";

const init = {
    login: {
        currentUser: null,
        isFetching: false,
        error: false
    }

}
const userReducer = (state = init, action) => {
    switch (action.type) {
        case POST_LOGIN:

        default:
            return state;
    }
};

export default userReducer