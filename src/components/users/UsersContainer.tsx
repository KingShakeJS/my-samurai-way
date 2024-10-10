import {usersType} from "../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {appStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/users-reducer";
import UsersClass from "./UsersClass";

type mapStateToPropsType = {
    state: usersType[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType[]) => void
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)


export default UsersContainer;