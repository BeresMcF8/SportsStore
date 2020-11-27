import {ActionTypes} from "./Types";

export const AddToCart = (product, quantity) => ({
    type: ActionTypes.CART_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
});

export const UpdateCardQuantity = (product, quantity) => ({
    type: ActionTypes.CART_UPDATE,
    payload: {
        product,
        quantity
    }
});

export const RemoveFromCart = (product) => ({
    type: ActionTypes.CART_REMOVE,
    payload: product
});

export const ClearCart = () => ({
    type: ActionTypes.CART_CLEAR
});