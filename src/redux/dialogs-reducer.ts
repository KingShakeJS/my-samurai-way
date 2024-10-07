import {actionsTypes, dialogsPageType} from "./state";
import {v1} from "uuid";

const UPDATE_NEW_MSG_VALUE = "UPDATE-NEW-MSG-VALUE"
const SEND_MSG = "SEND-MSG"

export const sendMsgAC = () => ({type: SEND_MSG} as const)
export const updateNewMsgValueAC = (value: string) => ({
    type: UPDATE_NEW_MSG_VALUE,
    newMsgValue: value
} as const)
export const dialogsReducer = (state: dialogsPageType, action: actionsTypes) => {

    switch (action.type) {
        case  UPDATE_NEW_MSG_VALUE:
            state.newMsgValue = action.newMsgValue
            return state
        case  SEND_MSG:
            const newMsg = state.newMsgValue
            state.newMsgValue = ''
            state.messages.push({id: v1(), message: newMsg})
            return state
        default:
            return state
    }
}