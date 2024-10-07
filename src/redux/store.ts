import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {sendMsgAC, updateNewMsgValueAC} from "./dialogs-reducer";

export type storeType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: actionsTypes) => void
}

// типизация action

export type addPostActionType = ReturnType<typeof addPostAC>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type updateNewMsgValueActionType = ReturnType<typeof updateNewMsgValueAC>
export type sendMsgActionType = ReturnType<typeof sendMsgAC>
export type actionsTypes =
    addPostActionType
    | updateNewPostTextActionType
    | updateNewMsgValueActionType
    | sendMsgActionType


// типизация всего state //////////////////////////////////////////////////////////////////////////////
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
// типизация страниц / вложенности первого уровня///////////////////////////////////////////////////////
export type profilePageType = {
    inputValue: string
    posts: Array<potsType>
}

export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMsgValue: string
}
// типизвция вложенности второго уровня/////////////////////////////////////////////////////////////////
export type potsType = {
    id: string
    msg: string
    likes: number
}

export type dialogsType = {
    userId: string
    userName: string
}
export type messagesType = {
    id: string
    message: string
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const store: storeType = {
//     _state: {
//         profilePage: {
//             inputValue: '',
//
//             posts: [
//                 {id: v1(), msg: 'sdfsdf sdf', likes: 2},
//                 {id: v1(), msg: 'ddd', likes: 234},
//                 {id: v1(), msg: 'gggd d ', likes: 232},
//                 {id: v1(), msg: 'dd ', likes: 23552},
//             ],
//
//         },
//         dialogsPage: {
//             dialogs: [
//                 {userId: v1(), userName: 'King'},
//                 {userId: v1(), userName: 'Czar'},
//                 {userId: v1(), userName: 'Holop'},
//                 {userId: v1(), userName: 'Zopa'},
//             ],
//             messages: [
//                 {id: v1(), message: 'dfg dfgdfg sdgff'},
//                 {id: v1(), message: 'jkl jklhjklhjkl hjklhjkl'},
//                 {id: v1(), message: 'z xczXCZXCzxcv  vcxcxz'},
//                 {id: v1(), message: '[pp[ppo[ npb[ po [ op[ '},
//                 {id: v1(), message: ' sadsgtykjui  kl ll kl k'},
//             ],
//             newMsgValue: ''
//         },
//     },
// // методы /////////////////////////////////////////////////////////////////////////////////////////////
//
//     _callSubscriber(state: stateType) {
//         console.log('заглушка')
//     },
//
//     subscribe(observer: (state: stateType) => void) {
//         this._callSubscriber = observer
//     },
//
//     getState() {
//         return this._state
//     },
//     dispatch(action: actionsTypes) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber(this._state)
//     },
//
// }

// типизация action creator /////////////////////////////////////////////////////////////////

// type addPostActionCreatorType = () => actionsTypes
// type updateNewPostTextActionCreatorType = (e: ChangeEvent<HTMLTextAreaElement>) => actionsTypes












