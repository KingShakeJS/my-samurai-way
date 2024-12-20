import {actionsTypes, usersPageType, usersType} from "../store";
import {Dispatch} from "redux";
import {userAPI} from "../../api/api";


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"


const initialState: usersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

const usersReducer = (state: usersPageType = initialState, action: actionsTypes): usersPageType => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }

        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.followingInProgressItem]
                    : state.followingInProgress.filter(id => id !== action.followingInProgressItem)

            }

        default:
            return state
    }

}

export const follow = (id: number) => ({type: FOLLOW, userId: id} as const)
export const unfollow = (id: number) => ({type: UNFOLLOW, userId: id} as const)
export const setUsers = (users: usersType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const setToggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const setFollowingInProgress = (followingInProgressItem: number, isFetching: boolean) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    followingInProgressItem
} as const)

// thunks  ////////////////////////////////////////////
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<actionsTypes>) => {
        dispatch(setToggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setUsers(data.items))
            dispatch(setToggleIsFetching(false))
        })
    }
}

export const followThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<actionsTypes>) => {
        dispatch(setFollowingInProgress(userId, true))
        userAPI.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(setFollowingInProgress(userId, false))
            })
    }
}

export const unFollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<actionsTypes>) => {
        dispatch(setFollowingInProgress(userId, true))

        userAPI.unFollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(setFollowingInProgress(userId, false))


            })
    }

}
//////////////////////////////////////////////////////////
    export default usersReducer