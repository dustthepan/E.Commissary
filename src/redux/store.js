import {createStore, applyMiddleware} from 'redux';
//apply middleware to dispatch necessary actions
//receives actions and passes them on

//retains data on refresh
import {persistStore} from 'redux-persist'
import {logger} from 'redux-logger';
// displays the state of our redux any time an action is invoked
import rootReducer from './root-reducer';

const middlewares =[logger]; //scalable format or applyMiddleware(logger)

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); 
// creates our store and returns our values of our values from the array of the middleware

//invoke built in method onto store
export const persistor = persistStore(store)
//

export default {store, persistor};



