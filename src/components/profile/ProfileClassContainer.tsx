import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {profileType, setUserProfileActionType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";

// type ProfileClassContainerPT = {
//     setUserProfile: (profile: profileType) => void
//     profile: profileType | null
// }
type mapStateToPropsType = {
    profile: profileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: profileType) => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType
type pathParamsType={
    userId: string
}
type routProsType=  RouteComponentProps<pathParamsType> & PropsType
class ProfileClassContainer extends Component<routProsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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



const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
const withUrlDataContainerComponent = withRouter(ProfileClassContainer)

const RootProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContainerComponent)


export default RootProfileContainer