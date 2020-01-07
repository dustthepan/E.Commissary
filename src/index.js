import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'; //routing for different pages in App
import {Provider} from 'react-redux'; // provide store to actions/reducers
import store from './redux/store'// needed for provider


ReactDOM.render(
<Provider store={store}>  
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>, document.getElementById('root')

);


