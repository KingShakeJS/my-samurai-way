import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import {actionsTypes, stateType} from "./redux/store";
import DialogsContainer from "./components/dialogs/DialogsContainer";


// урок 44

type AppPT = {
    state: stateType
    dispatch: (action: actionsTypes) => void
}

function App({state, dispatch}: AppPT) {

    return (

        <div className='app-wrapper'>


            <Header/>

            <NavBar/>

            <div className={'Content'}>

                <Route render={() => <DialogsContainer
                    dispatch={dispatch}
                    state={state.dialogsPage}
                />} path={'/dialogs'}/>

                <Route render={() => <Profile
                    state={state.profilePage}
                    dispatch={dispatch}
                />} path={'/profile'}/>

            </div>


        </div>
    );
}

export default App;


