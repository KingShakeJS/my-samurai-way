import React from 'react';
import s from './Profile.module.css'

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
            <div>
                MyPosts
                <div>
                    new post
                </div>
                <div className='posts'>
                    <div className={s.item}>Post1</div>
                    <div className={s.item}>Post2</div>
                </div>
            </div>

        </div>
    );
};

export default Profile;