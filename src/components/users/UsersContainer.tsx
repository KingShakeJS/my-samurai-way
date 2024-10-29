import {usersType} from "../../redux/store";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollowThunkCreator
} from "../../redux/reducers/users-reducer";
import UsersClass from "./UsersClass";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import React from "react";

type mapStateToPropsType = {
    state: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[] | []
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}









export default compose<React.ComponentType>(
    connect(mapStateToProps, {

        followThunkCreator,
        unFollowThunkCreator,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setToggleIsFetching,
        getUsersThunkCreator


    }),
    // withAuthRedirect
)(UsersClass)