import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";


// урок 53


function App() {

    return (

        <div className='app-wrapper'>

            <Header/>

            <NavBar/>

            <div className={'Content'}>

                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>

                <Route render={() => <Profile/>} path={'/profile'}/>

                <Route render={() => <UsersContainer/>} path={'/users'}/>

            </div>

        </div>
    );
}

export default App;


