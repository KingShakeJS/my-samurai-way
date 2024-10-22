import {actionsTypes} from "../store";

const SET_USER_DATA = 'SET-USER-DATA'

export type authType = {
    userId: null | string | number
    email: null | string
    login: null | string
    isAuth:boolean
}

export type setUserDataACT={
    type: typeof SET_USER_DATA
    data: authType
}

const initialState: authType = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}

export const AuthReducer = (state: authType = initialState, action: actionsTypes): authType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (userId: null | string | number, email: null | string, login: null | string, isAuth:boolean):setUserDataACT =>
    ({
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    })