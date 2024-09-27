import React from 'react';
import {OBLOJKA} from "../Profile";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src={OBLOJKA} alt=""/>
            </div>

            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </>
    );
};

export default ProfileInfo;