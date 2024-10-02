import './index.css';
import state, {addPost, stateType, subscribe, updateInputValue} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateInputValue={updateInputValue}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)



