import {actionsTypes} from "../store";
import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA'

export type authType = {
    userId: null | string | number
    email: null | string
    login: null | string
    isAuth: boolean
}

export type setUserDataACT = {
    type: typeof SET_USER_DATA
    data: authType
}

const initialState: authType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
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

export const setUserData = (userId: null | string | number, email: null | string, login: null | string, isAuth: boolean): setUserDataACT =>
    ({
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    })


export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch<actionsTypes>) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {login, email, id} = res.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator())
            }
        })
}

export const logout = () => (dispatch: Dispatch<actionsTypes>) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(null, null,null, false))
            }
        })
}