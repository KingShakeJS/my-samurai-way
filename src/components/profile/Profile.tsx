import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";

import MyPostsContainer from "./myPosts/MyPostsContainer";

export const OBLOJKA = 'https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg'


// type ProfilePT = {
//     state: profilePageType
//     dispatch: (action: actionsTypes) => void
// }

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;