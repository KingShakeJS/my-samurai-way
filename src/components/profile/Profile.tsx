import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import {actionsTypes, profilePageType} from "../../redux/store";
import MyPostsContainer from "./myPosts/MyPostsContainer";

export const OBLOJKA = 'https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg'


type ProfilePT = {
    state: profilePageType
    dispatch: (action: actionsTypes) => void
}

const Profile = ({state, dispatch}: ProfilePT) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                state={state}
                dispatch={dispatch}
            />

        </div>
    );
};

export default Profile;