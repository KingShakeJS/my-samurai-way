import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import RootProfileContainer from "./components/profile/ProfileClassContainer";


// урок 60


function App() {

    return (

        <div className='app-wrapper'>

            <Header/>

            <NavBar/>

            <div className={'Content'}>

                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>

                <Route render={() => <RootProfileContainer/>} path={'/profile'}/>

                <Route render={() => <UsersContainer/>} path={'/users'}/>

            </div>

        </div>
    );
}

export default App;


