
import {v1} from "uuid";
import {actionsTypes, profilePageType} from "../store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)

const initialState: profilePageType = {
    inputValue: '',

    posts: [
        {id: v1(), msg: 'sdfsdf sdf', likes: 2},
    ],

}
export const profileReducer = (state: profilePageType = initialState, action: actionsTypes): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                inputValue: '',
                posts: [...state.posts, {id: v1(), msg: state.inputValue, likes: 0}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                inputValue: action.newText
            }
        default:
            return state
    }
}