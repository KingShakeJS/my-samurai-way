import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {PostPT} from "./components/profile/myPosts/post/Post";
import {DialogItemPT} from "./components/dialogs/dialogItem/DialogItem";
import {MsgPt} from "./components/dialogs/msg/Msg";


// урок 29

type AppPT = {
    posts: Array<PostPT>
    dialogs: Array<DialogItemPT>
    messages: Array<MsgPt>
}

function App({posts, messages, dialogs}: AppPT) {

    return (

        <div className='app-wrapper'>


            <Header/>

            <NavBar/>

            <div className={'Content'}>

                <Route render={() => <Dialogs
                    dialogs={dialogs}
                    messages={messages}
                />} path={'/dialogs'}/>

                <Route render={() => <Profile
                    posts={posts}
                />} path={'/profile'}/>

            </div>


        </div>
    );
}

export default App;


