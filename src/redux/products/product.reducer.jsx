import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    inventory: SHOP_DATA
}

 const productReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
        return state;
    }
}

export default productReducer;