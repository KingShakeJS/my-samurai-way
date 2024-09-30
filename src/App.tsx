import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";


// урок 28
function App() {


    return (

        <div className='app-wrapper'>


            <Header/>

            <NavBar/>

            <div className={'Content'}>

                <Route render={() => <Dialogs/>} path={'/dialogs'}/>
                <Route render={() => <Profile/>} path={'/profile'}/>

            </div>


        </div>
    );
}

export default App;


