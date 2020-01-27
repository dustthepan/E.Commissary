import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'; //routing for different pages in App
import {Provider} from 'react-redux'; // provide store to actions/reducers
import {store, persistor} from './redux/store'// needed for provider
import {PersistGate} from 'redux-persist/es/integration/react';


ReactDOM.render(
<Provider store={store}>  
<BrowserRouter>
<PersistGate persistor={persistor}>
<App />
</PersistGate>
</BrowserRouter>
</Provider>, document.getElementById('root')
);


