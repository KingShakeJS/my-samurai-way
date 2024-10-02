import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {stateType} from "./redux/state";


// урок 38

type AppPT = {
    state: stateType
    addPost: () => void
    updateInputValue: (newText: string) => void
}

function App({state, addPost, updateInputValue}: AppPT) {

    return (

        <div className='app-wrapper'>


            <Header/>

            <NavBar/>

            <div className={'Content'}>

                <Route render={() => <Dialogs
                    state={state.dialogsPage}
                />} path={'/dialogs'}/>

                <Route render={() => <Profile
                    state={state.profilePage}
                    addPost={addPost}
                    updateInputValue={updateInputValue}
                />} path={'/profile'}/>

            </div>


        </div>
    );
}

export default App;


