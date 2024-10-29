import {actionsTypes} from "../store";
import {Dispatch} from "redux";
import {getAuthUserDataThunkCreator} from "./auth-reducer";

export const SET_INITIALIZED = 'SET-INITIALIZED'

type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false
}
export const appReducer = (state: initialStateType = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:

            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED} as const)
export const initializeApp = () => (dispatch: Dispatch<any>) => {
    const myPromise = dispatch(getAuthUserDataThunkCreator())

 Promise.all([myPromise]).then(() =>{dispatch(initializedSuccess()) } )

}