import {actionsTypes, profilePageType, profileType} from "../store";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";




const initialState: profilePageType = {
    inputValue: '',

    posts: [
        {id: 786, msg: 'sdfsdf sdf', likes: 2},
    ],
    profile: null,
    status: '',

}
export const profileReducer = (state: profilePageType = initialState, action: actionsTypes): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,

                posts: [...state.posts, {id: 33, msg: action.msg, likes: 10}]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}



export const addPostAC = (msg:string) => {
    return {
        type: ADD_POST,
        msg
    } as const
}
export const setUserProfile = (profile: profileType) => ({
    type: SET_USER_PROFILE, profile
} as const)


export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)

export const setStatusAC = (status: string) => ({
    type: SET_STATUS,
    status: status
} as const)

////////////////////////
export const getUserProfileThunkCreator = (userId:string) => (dispatch: Dispatch<actionsTypes>)=> {
    userAPI.getProfile(userId)
        .then(res => {
          dispatch(setUserProfile(res.data))
        })
}
export const getUserStatusThunkCreator = (userId:string) => (dispatch: Dispatch<actionsTypes>)=> {
    profileAPI.getStatus(userId)
        .then(res => {
          dispatch(setStatusAC(res.data))
        })
}

export const updateUserStatusThunkCreator = (status:string) => (dispatch: Dispatch<actionsTypes>)=> {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode===0){
                dispatch(setStatusAC(status))

            }
        })
}