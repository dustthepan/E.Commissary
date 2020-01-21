import {createSelector} from 'reselect';

//input selector
//takes the whole state and returns a part of it

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems
)

export const selectHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalated, item) => accumalated + item.quantity, 0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalated, cartItem) => accumalated + cartItem.quantity * cartItem.price, 0
    )
);
