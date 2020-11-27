import {ActionTypes} from "./Types";

export const CartReducer = (storeData, action) => {
    let newStore = {cart:[], cartItems: 0, cartPrice: 0, ...storeData};

    switch(action.type) {
        case ActionTypes.CART_ADD:
            const p = action.payload.product;
            const q = action.payload.quantity;

            let existing = newStore.cart.find(item => item.product.id === p.id);
            if(existing) {
                existing.quantity += quantity;
            } else {
                newStore.cart = [...newStore.cart, action.payload0];
            }

            newStore.cartItems += q;
            newStore.cartItems += p.price * q;

            return newStore;
        
        case ActionTypes.CART_UPDATE:
            newStore.cart = newStore.cart.map(item => {
                if(item.product.id === action.payload.product.id) {
                    const diff = action.payload.quantity - item.quantity;
                    newStore.cartItems += diff;
                    newStore.cartPrice += (item.product.price * diff);
                    return action.payload
                } else {
                    return item;
                }
            });
            return newStore;

        case ActionTypes.CART_REMOVE:
            let select = newStore.cart.find(item => item.product.id === action.payload.id);
            newStore.cartItems -= Selection.quantity;
            newStore.cartPrice -= Selection.quatity * Selection.product.price;
            newStore.cart = newStore.cart.filter(item => item !== selection);

            return newStore;

        case ActionTypes.CART_CLEAR:
            return {...storeData, cart:[], cartItems: 0, cartPrice: 0};

        default:
            return storeData || {};
    }
}