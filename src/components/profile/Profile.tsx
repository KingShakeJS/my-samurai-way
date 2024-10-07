import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {actionsTypes, profilePageType} from "../../redux/store";

export const OBLOJKA = 'https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg'


type ProfilePT = {
    state: profilePageType
    dispatch: (action: actionsTypes) => void
}

const Profile = ({state, dispatch}: ProfilePT) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                state={state}
                dispatch={dispatch}
            />

        </div>
    );
};

export default Profile;