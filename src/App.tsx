import React from 'react';
import './App.css';
import NavBar from "./components/navBar/NavBar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import RootProfileContainer from "./components/profile/ProfileClassContainer";
import {RootHeaderContainer} from "./components/header/HeaderClassContainer";


// урок 68


function App() {




    return (

        <div className='app-wrapper'>

            <RootHeaderContainer />

            <NavBar/>

            <div className={'Content'}>

                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>

                <Route render={() => <RootProfileContainer />} path={'/profile/:userId?'}/>

                <Route render={() => <UsersContainer/>} path={'/users'}/>

            </div>

        </div>
    );
}

export default App;


