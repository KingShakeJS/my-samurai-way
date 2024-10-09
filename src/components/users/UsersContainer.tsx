import {usersType} from "../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {appStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/users-reducer";

type mapStateToPropsType = {
    state: usersType[]
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: usersType[]) => void
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;