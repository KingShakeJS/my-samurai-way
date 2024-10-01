import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

export const OBLOJKA = 'https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg'


type ProfilePT = {
    state: profilePageType
    addPost: () => void
    updateInputValue: (newText: string) => void

}

const Profile = ({state, addPost, updateInputValue}: ProfilePT) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                state={state}
                addPost={addPost}
                updateInputValue={updateInputValue}
            />

        </div>
    );
};

export default Profile;