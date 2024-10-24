import {actionsTypes, profilePageType, profileType} from "../store";
import {Dispatch} from "redux";
import {userAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";




const initialState: profilePageType = {
    inputValue: '',

    posts: [
        {id: 786, msg: 'sdfsdf sdf', likes: 2},
    ],
    profile: null

}
export const profileReducer = (state: profilePageType = initialState, action: actionsTypes): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                inputValue: '',
                posts: [...state.posts, {id: 33, msg: state.inputValue, likes: 0}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                inputValue: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}



export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const setUserProfile = (profile: profileType) => ({
    type: SET_USER_PROFILE, profile
} as const)


export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)

////////////////////////
export const getUserProfileThunkCreator = (userId:string) => (dispatch: Dispatch<actionsTypes>)=> {
    userAPI.getProfile(userId)
        .then(res => {
          dispatch(setUserProfile(res.data))
        })
}