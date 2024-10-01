import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

export const OBLOJKA = 'https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg'




type ProfilePT={
    state: profilePageType

}

const Profile = ({state}:ProfilePT) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    );
};

export default Profile;