import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {PostPT} from "./components/profile/myPosts/post/Post";
import {DialogItemPT} from "./components/dialogs/dialogItem/DialogItem";
import {MsgPt} from "./components/dialogs/msg/Msg";

const posts: Array<PostPT> = [
    {id: 1, msg: 'sdfsdf sdf', likes: 2},
    {id: 2, msg: 'ddd', likes: 234},
    {id: 3, msg: 'gggd d ', likes: 232},
    {id: 4, msg: 'dd ', likes: 23552},
]
const dialogs: Array<DialogItemPT> = [
    {userId: 1, userName: 'King'},
    {userId: 2, userName: 'Czar'},
    {userId: 3, userName: 'Holop'},
    {userId: 4, userName: 'Zopa'},
]

const messages: Array<MsgPt> = [
    {id: 1, message: 'dfg dfgdfg sdgff'},
    {id: 2, message: 'jkl jklhjklhjkl hjklhjkl'},
    {id: 3, message: 'z xczXCZXCzxcv  vcxcxz'},
    {id: 4, message: '[pp[ppo[ npb[ po [ op[ '},
    {id: 5, message: ' sadsgtykjui  kl ll kl k'},
]


ReactDOM.render(
    <BrowserRouter>
        <App
            posts={posts}
            dialogs={dialogs}
            messages={messages}
        />
    </BrowserRouter>,
    document.getElementById('root')
);