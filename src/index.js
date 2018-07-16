import React from "react";
import {createStore,applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import mainReducer from './reducers/todoReducer';
import App from './components/app';
import thunk from 'redux-thunk'; // for action creator's.... to be able return both function and object;

const initialState = {
    todoArr:[]
}
const store = createStore(mainReducer,initialState,applyMiddleware(thunk));

render(
<Provider store={store}>
    <App />
</Provider>,document.getElementById('root'));