import {cartTypes} from './cart.types'
import {addItemsToCart} from './cart.helper'

//default state of checkout box to be hidden
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {

if (action.type === cartTypes.TOGGLE_CART_HIDDEN){
    return {
        ...state,
        hidden: !state.hidden
    }
} else if (action.type === cartTypes.ADD_ITEM){
    return {
        ...state,
        cartItems: addItemsToCart(state.cartItems,action.payload)
    }
} else {
        return state;
    }
}

export default cartReducer;




