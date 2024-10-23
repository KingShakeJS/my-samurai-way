import {usersType} from "../../redux/store";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setFollowingInProgress,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/reducers/users-reducer";
import UsersClass from "./UsersClass";

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


const UsersContainer = connect(mapStateToProps, {

    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
    setFollowingInProgress


})(UsersClass)


export default UsersContainer;