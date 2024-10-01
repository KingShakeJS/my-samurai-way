// типизация всего state //////////////////////////////////////////////////////////////////////////////
import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
// типизация страниц / вложенности первого уровня///////////////////////////////////////////////////////
export type profilePageType = {
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
const state: stateType = {
    profilePage: {
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
}

export const addPost = (postMessage: string) => {
    const newPost: potsType = {
        id: v1(), msg: postMessage, likes: 0
    }
    state.profilePage.posts.push(newPost)

    rerenderEntireTree(state)
}

export default state
