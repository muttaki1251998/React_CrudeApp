import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, compose } from 'redux'; 
import App from './App';
import postReducer from './reducers/postReducer';

const store = createStore(postReducer);

ReactDOM.render(
   <Provider store = { store }>       
    <App />
   </Provider>,
    document.getElementById('root')
)