import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Users from "./components/users/Users";
import UsersContainer from "./components/users/UsersContainer";


// урок 50



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


