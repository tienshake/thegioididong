import {
    ADD_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    TOTAL_PRODUCT_CART,
    POST_LOGIN,
    DELETE_CART,
    LOGIN
} from "../const/index";



export const login = (payload) => {
    return {
        type: LOGIN,
        payload,
    };
}

export const addCart = (payload) => {
    return {
        type: ADD_CART,
        payload,
    };
};

export const IncreaseQuantity = (payload) => {
    return {
        type: INCREASE_QUANTITY,
        payload,
    };
};


export const DecreaseQuantity = (payload) => {
    return {
        type: DECREASE_QUANTITY,
        payload,
    };
};

export function DeleteCart(payload) {
    return {
        type: DELETE_CART,
        payload
    }
}

export const totalProduct = (payload) => {
    return {
        type: TOTAL_PRODUCT_CART,
        payload
    };
};

export const handleLogin = () => {
    return {
        type: POST_LOGIN,
    };
};


