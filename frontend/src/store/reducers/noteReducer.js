import {
    ADD_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    TOTAL_PRODUCT_CART
} from "../const/index";

const init = {
    numberCart: 0,
    Carts: [],
    products: [],
    total: 0

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

                    }
                    state.Carts.push(_cart);
                }
            }

            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            console.log(action.payload);
            if (state.Carts[action.payload].quantity < 5) {
                state.Carts[action.payload].quantity++;
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
            return {
                ...state
            }
        case TOTAL_PRODUCT_CART:
            let quantityData = ''
            let priceData = ''
            state.Carts && state.Carts.length > 0 && state.Carts.reduce((prev, curr) => {
                quantityData = prev.quantity + curr.quantity
                priceData = (+prev.price.replace(/,/g, '')) + (+curr.price.replace(/,/g, ''))
            }, { quantity: 0, price: '0,0' });
            state.total = quantityData * priceData

            return {
                ...state
            }

        default:
            return state;
    }
};

export default noteReducers