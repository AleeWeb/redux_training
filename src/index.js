import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux'

function productsReducer(state = [], action){
    return state;
}

function userReducer(state='', action){
    return state;
}

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const store = createStore(
    allReducers, 
    {
    products: [{name: 'iPhone'}],
    user: 'Michael'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())

/* Now Prints out: 
{products: Array(0), user: ""}
products: []
user: "" */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
