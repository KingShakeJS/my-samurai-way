import {actionsTypes, usersPageType, usersType} from "../store";


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"


const initialState: usersPageType = {
    users: [

    ],

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
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }

}

export const followAC = (id: number) => ({type: FOLLOW, userId: id} as const)
export const unfollowAC = (id: number) => ({type: UNFOLLOW, userId: id} as const)
export const setUsersAC = (users: usersType[]) => ({type: SET_USERS, users} as const)
export default usersReducer