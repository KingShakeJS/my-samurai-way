import {actionsTypes, potsType, profilePageType} from "./state";
import {v1} from "uuid";

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
export const profileReducer = (state: profilePageType, action: actionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: potsType = {
                id: v1(),
                msg: state.inputValue,
                likes: 0
            }
            state.posts.push(newPost)
            state.inputValue = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.inputValue = action.newText
            return state
        default:
            return state
    }
}