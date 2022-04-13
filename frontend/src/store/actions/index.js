import {
    ADD_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    TOTAL_PRODUCT_CART
} from "../const/index";


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


export const totalProduct = () => {
    return {
        type: TOTAL_PRODUCT_CART,
    };
};

