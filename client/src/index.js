import React from 'react';
import ReactDOM from 'react-dom';

// provider keeps track of store which is 
// a globle state that allows us to access 
// that store anywhere inside of the app
// and not only in the child component
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware, compose } from 'redux';
import thunck from 'redux-thunk';

import { reducers } from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunck)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);