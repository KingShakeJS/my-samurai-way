import {v1} from "uuid";
import {ChangeEvent} from "react";

export type storeType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: actionsTypes) => void
}

// типизация action

// export type addPostActionType = {
//     type: 'ADD-POST'
// }
// export type updateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }

export type addPostActionType = ReturnType<typeof addPostAC>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type actionsTypes = addPostActionType | updateNewPostTextActionType


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
// action types конствнты ///////////////////////////////////////////////////////////////////////////////
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const store: storeType = {
    _state: {
        profilePage: {
            inputValue: '',

            posts: [
                {id: v1(), msg: 'sdfsdf sdf', likes: 2},
                {id: v1(), msg: 'ddd', likes: 234},
                {id: v1(), msg: 'gggd d ', likes: 232},
                {id: v1(), msg: 'dd ', likes: 23552},
            ],

        },
        dialogsPage: {
            dialogs: [
                {userId: v1(), userName: 'King'},
                {userId: v1(), userName: 'Czar'},
                {userId: v1(), userName: 'Holop'},
                {userId: v1(), userName: 'Zopa'},
            ],
            messages: [
                {id: v1(), message: 'dfg dfgdfg sdgff'},
                {id: v1(), message: 'jkl jklhjklhjkl hjklhjkl'},
                {id: v1(), message: 'z xczXCZXCzxcv  vcxcxz'},
                {id: v1(), message: '[pp[ppo[ npb[ po [ op[ '},
                {id: v1(), message: ' sadsgtykjui  kl ll kl k'},
            ],
        },
    },
// методы /////////////////////////////////////////////////////////////////////////////////////////////

    _callSubscriber(state: stateType) {
        console.log('заглушка')
    },

    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },
    dispatch(action: actionsTypes) {
        if (action.type === ADD_POST) {
            const newPost: potsType = {
                id: v1(),
                msg: this._state.profilePage.inputValue,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.inputValue = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            if (action.newText) {
                this._state.profilePage.inputValue = action.newText
                this._callSubscriber(this._state)
            }
        }
    },


}

// типизация action creator /////////////////////////////////////////////////////////////////

type addPostActionCreatorType = () => actionsTypes
type updateNewPostTextActionCreatorType = (e: ChangeEvent<HTMLTextAreaElement>) => actionsTypes

// функции action creator //////////////////////////////////////////////////////////////////
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)


export default store










