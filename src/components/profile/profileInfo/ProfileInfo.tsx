import React from 'react';
import {OBLOJKA} from "../Profile";
import s from './ProfileInfo.module.css'
import PreLoader from "../../common/preLoader/PreLoader";
import {profileType} from "../../../redux/store";
import {ProfileStatus} from "./profileStatus/ProfileStatus";

type ProfileInfoPT = {
    profile: profileType | null

}

const Description = ({profile}:ProfileInfoPT) => {
    return (
        <>
            <div>
                <img src={OBLOJKA} alt=""/>
            </div>

            <div className={s.descriptionBlock}>
                {
                    profile?.photos.small ? <img src={profile.photos.small} alt=""/> : ''
                }
                ava + description

                <ProfileStatus
                    status={'ass'}
                />
            </div>
        </>
    )
}
const ProfileInfo = ({profile}: ProfileInfoPT) => {


    return (
        <>
            {
                !profile
                    ? <PreLoader/>
                    : <Description profile={profile}/>
            }
        </>
    );
};

export default ProfileInfo;