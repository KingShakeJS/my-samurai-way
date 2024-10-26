import React from 'react';
import {OBLOJKA} from "../Profile";
import s from './ProfileInfo.module.css'
import PreLoader from "../../common/preLoader/PreLoader";
import {profileType} from "../../../redux/store";
import {ProfileStatus} from "./profileStatus/ProfileStatus";

type ProfileInfoPT = {
    profile: profileType | null
    status: string
    updateUserStatusThunkCreator : (status:string) => void

}

const Description = ({profile, status,updateUserStatusThunkCreator}:ProfileInfoPT) => {
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
                    status={status}
                    updateUserStatusThunkCreator={updateUserStatusThunkCreator}
                />
            </div>
        </>
    )
}
const ProfileInfo = ({profile, status,updateUserStatusThunkCreator}: ProfileInfoPT) => {


    return (
        <>
            {
                !profile
                    ? <PreLoader/>
                    : <Description
                    status={status}
                        profile={profile}
                    updateUserStatusThunkCreator={updateUserStatusThunkCreator}
                    />
            }
        </>
    );
};

export default ProfileInfo;