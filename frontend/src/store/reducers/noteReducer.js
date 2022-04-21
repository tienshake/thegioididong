import {
    ADD_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    TOTAL_PRODUCT_CART,
    DELETE_CART
} from "../const/index";
const localStorageData = localStorage.getItem('products');
const dataLocal = localStorageData ? JSON.parse(localStorageData) : [];

const init = {
    numberCart: dataLocal && dataLocal.numberCart ? dataLocal.numberCart : 0,
    Carts: dataLocal && dataLocal.Carts ? dataLocal.Carts : [],
    products: [],
    total: dataLocal && dataLocal.total ? dataLocal.total : 0
}
const noteReducers = (state = init, action) => {
    switch (action.type) {
        case ADD_CART:
            if (state.numberCart == 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: action.payload.quantity,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price,
                    color: action.payload.color,
                    ram: action.payload.ram,
                    rom: action.payload.rom,
                    quantityItem: action.payload.quantityItem,
                }
                state.Carts.push(cart);
            } else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id == action.payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: action.payload.quantity,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price,
                        color: action.payload.color,
                        ram: action.payload.ram,
                        rom: action.payload.rom,
                        quantityItem: action.payload.quantityItem,
                    }
                    state.Carts.push(_cart);
                }
            }
            if (state) {
                let number = 0
                state.Carts.map((item, key) => {
                    number += item.quantity
                });
                state.numberCart = number
                localStorage.setItem("products", JSON.stringify(state));
            }
            return {
                ...state,
            }
        case INCREASE_QUANTITY:
            if (state.Carts[action.payload].quantity < state.Carts[action.payload].quantityItem) {
                console.log(state.Carts[action.payload].quantityItem);
                state.Carts[action.payload].quantity++;
                state.numberCart++
            }
            if (state) {
                localStorage.setItem("products", JSON.stringify(state));
            }
            return {
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }
            if (state) {
                localStorage.setItem("products", JSON.stringify(state));
            }
            return {
                ...state
            }
        case DELETE_CART:
            state.Carts = state.Carts.filter(item => {
                return item.id != state.Carts[action.payload].id
            })
            if (state) {
                let number = 0
                state.Carts.map((item, key) => {
                    number += item.quantity
                });
                state.numberCart = number
                localStorage.setItem("products", JSON.stringify(state));
            }
            return {
                ...state,
            }
        case TOTAL_PRODUCT_CART:
            let stateTotal = state.total
            stateTotal = action.payload
            // state.total = action.payload
            // if (state) {
            //     localStorage.setItem("products", JSON.stringify(state));
            // }
            return {
                ...state,
                total: stateTotal
            }

        default:
            return state;
    }
};

export default noteReducers