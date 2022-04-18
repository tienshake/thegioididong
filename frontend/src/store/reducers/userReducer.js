import {
    POST_LOGIN
} from "../const/index";

const init = {
    user: {},
    isLogin: false,

}
const userReducer = (state = init, action) => {
    switch (action.type) {
        case POST_LOGIN:
            console.log('login');
        default:
            return state;
    }
};

export default userReducer