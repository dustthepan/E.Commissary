import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';

//import local storage from browser
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import productReducer from './products/product.reducer';

//create persist configuration

const persistConfig = {
    key: 'root',
    storage, 
    maintainList:['cart'] 
    //persist cart only 
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory:directoryReducer,
    product: productReducer
})

//manage local storage
// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });

//persist capability 
export default persistReducer(persistConfig,rootReducer);