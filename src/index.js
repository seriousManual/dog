import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './state/mainReducer'
import mainSaga from './state/mainSaga'

import './index.css'
import App from './App.jsx'

const sagaMiddleware = createSagaMiddleware()

let composeEnhancers = compose;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
}

const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(mainSaga())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));