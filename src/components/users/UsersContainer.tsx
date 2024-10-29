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
import {compose} from "redux";
import React from "react";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";

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
        state: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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