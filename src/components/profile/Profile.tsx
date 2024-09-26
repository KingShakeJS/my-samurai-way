import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";

export const OBLOJKA = 'https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg'


const Profile = () => {
    return (
        <div className={s.Content}>

            <div>
                <img src={OBLOJKA} alt=""/>
            </div>

            <div>
                ava + description
            </div>

            <MyPosts/>

        </div>
    );
};

export default Profile;