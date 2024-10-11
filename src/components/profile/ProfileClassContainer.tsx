import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {profileType} from "../../redux/store";

type ProfileClassContainerPT = {
    setUserProfile: (profile: profileType) => void
    profile: profileType | null
}

class ProfileClassContainer extends Component<ProfileClassContainerPT> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
        />
    }
}



type mapStateToPropsType={
    profile: profileType | null
}

const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
const RootProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(ProfileClassContainer)

export default RootProfileContainer