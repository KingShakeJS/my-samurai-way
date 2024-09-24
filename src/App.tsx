import React from 'react';
import './App.css';


export const LOGO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5uv7QTp8TwmP5eDDUk8p3gJAO-Hjswj5fA&s'
export const OBLOJKA = 'https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg'

function App() {


    return (

        <div className='app-wrapper'>


            <header className='Header'>
                <img src={LOGO} alt="какая-то картинка"/>
            </header>

            <nav className='Nav'>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>

            <div className='Content'>
                <div>
                    <img src={OBLOJKA} alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    MyPosts
                    <div>
                        new post
                    </div>
                    <div className='posts'>
                        <div>Post1</div>
                        <div>Post2</div>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default App;


