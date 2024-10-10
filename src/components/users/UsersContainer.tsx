import {usersType} from "../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {appStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/reducers/users-reducer";
import UsersClass from "./UsersClass";

type mapStateToPropsType = {
    state: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (currentPage: number) =>void
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (currentPage: number) => {
            dispatch(setTotalUsersCountAC(currentPage))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)


export default UsersContainer;