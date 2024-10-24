import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";

import MyPostsContainer from "./myPosts/MyPostsContainer";
import {profileType} from "../../redux/store";
import {Redirect} from "react-router-dom";

export const OBLOJKA = 'https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg'


type ProfilePT = {

    profile: profileType | null
    isAuth: boolean

}

const Profile = ({profile, isAuth}: ProfilePT) => {

    if (!isAuth) return <Redirect to={'login'}/>
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;