import {cartTypes} from './cart.types';

export const hideCart = () => ({
    type: cartTypes.TOGGLE_CART_HIDDEN // no payload needed, optional property
})

export const addCart = (item) => ({
    type: cartTypes.ADD_ITEM,
    payload: item
})

