import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";


// урок 19
function App() {


    return (

        <div className='app-wrapper'>


            <Header/>

            <NavBar/>

            <div className={'Content'}>

                {/*<Profile/>*/}

                <Dialogs/>

            </div>


        </div>
    );
}

export default App;


