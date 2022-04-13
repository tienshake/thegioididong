import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const/index";

const init = {
    products: []
}
const noteReducers = (state = init, action) => {
    switch (action.type) {
        case ADD_NEW_NOTE:
            console.log(action.content)
            return state;
        default:
            return state;
    }
};

export default noteReducers