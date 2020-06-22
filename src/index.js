import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {bookReducer} from './reducers/bookReducer';

if (localStorage.getItem('books') == null) {
    localStorage.setItem('books', JSON.stringify([]));
}

let initialState = {
	currentIndex: -1,
	books: JSON.parse(localStorage.getItem('books'))
}

var store = createStore(bookReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
