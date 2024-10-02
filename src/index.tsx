import './index.css';
import store, {stateType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateInputValue={store.updateInputValue.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)



