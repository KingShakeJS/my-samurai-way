import React from 'react';


export const OBLOJKA = 'https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg'


const Profile = () => {
    return (
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
    );
};

export default Profile;