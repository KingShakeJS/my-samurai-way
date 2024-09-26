import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";


// урок 21
function App() {


    return (

        <div className='app-wrapper'>


            <Header/>

            <NavBar/>

            <div className={'Content'}>

                <Route component={Dialogs} path={'/dialogs'}/>
                <Route component={Profile} path={'/profile'}/>

            </div>


        </div>
    );
}

export default App;


