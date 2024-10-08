import {actionsTypes, dialogsPageType} from "../store";

const UPDATE_NEW_MSG_VALUE = "UPDATE-NEW-MSG-VALUE"
const SEND_MSG = "SEND-MSG"

export const sendMsgAC = () => ({type: SEND_MSG} as const)
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
        case  UPDATE_NEW_MSG_VALUE:
            return {
                ...state,
                newMsgValue: action.newMsgValue
            }
        case  SEND_MSG:
            return {
                ...state,
                newMsgValue: '',
                messages: [...state.messages, {id: 89, message: state.newMsgValue}]
            }
        default:
            return state
    }
}