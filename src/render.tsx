import {addPost, stateType, updateInputValue} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const rerenderEntireTree = (state: stateType) => {
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