import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                {/*It will will be {props.children}*/}
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};

//For initial page rendering
rerenderEntireTree(store.getState());

//For subsenquent rendering. Redux won't pass updated state...only notifies, so we need to use anonymous function and pass updated state
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
