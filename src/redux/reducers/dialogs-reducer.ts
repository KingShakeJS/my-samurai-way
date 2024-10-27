import {actionsTypes, dialogsPageType} from "../store";

const UPDATE_NEW_MSG_VALUE = "UPDATE-NEW-MSG-VALUE"
const SEND_MSG = "SEND-MSG"

export const sendMsgAC = (message: string) => ({type: SEND_MSG, message} as const)
export const updateNewMsgValueAC = (value: string) => ({
    type: UPDATE_NEW_MSG_VALUE,
    newMsgValue: value
} as const)

const initialState: dialogsPageType = {
    dialogs: [
        {userId: 67, userName: 'King'},
    ],
    messages: [
        {id: 876, message: 'dfg dfgdfg sdgff'},
    ],
    newMsgValue: ''
}
export const dialogsReducer = (state: dialogsPageType = initialState, action: actionsTypes): dialogsPageType => {
    switch (action.type) {

        case  SEND_MSG:
            return {
                ...state,

                messages: [...state.messages, {id: 89, message: action.message}]
            }
        default:
            return state
    }
}