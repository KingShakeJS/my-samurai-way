import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";


// урок 15
function App() {


    return (

        <div className='app-wrapper'>


            <Header/>

            <NavBar/>

            <Profile/>


        </div>
    );
}

export default App;


