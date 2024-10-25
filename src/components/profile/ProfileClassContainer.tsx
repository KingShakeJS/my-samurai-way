import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {profileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfileThunkCreator} from "../../redux/reducers/profile-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    profile: profileType | null

}
type mapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: string) => void
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
            userId = '2'
        }

        this.props.getUserProfileThunkCreator(userId)
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
        profile: state.profilePage.profile,

    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileClassContainer)