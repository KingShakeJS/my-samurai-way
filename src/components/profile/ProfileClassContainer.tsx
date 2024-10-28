import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {profileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/reducers/profile-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    profile: profileType | null
    status: string
    myId: any
    isAuth: boolean

}
type mapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: string) => void
    getUserStatusThunkCreator : (userId:string) => void
    updateUserStatusThunkCreator : (status:string) => void

}

type PropsType = mapStateToPropsType & mapDispatchToPropsType
type pathParamsType = {
    userId: string
}
type routProsType = RouteComponentProps<pathParamsType> & PropsType

class ProfileClassContainer extends Component<routProsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=this.props.myId
        }

        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)

    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}
        />
    }
}


const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status:  state.profilePage.status,
        myId: state.auth.userId,
        isAuth: state.auth.isAuth

    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileThunkCreator,
        getUserStatusThunkCreator,
        updateUserStatusThunkCreator,
    }),
    withRouter,
    // withAuthRedirect
)(ProfileClassContainer)