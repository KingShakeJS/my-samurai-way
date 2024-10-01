// типизация всего state
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
// типизация страниц / вложенности первого уровня
export type profilePageType = {
    posts: Array<potsType>
}

export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
// типизвция вложенности второго уровня
export type potsType = {
    id: number
    msg: string
    likes: number
}

export type dialogsType = {
    userId: number
    userName: string
}
export type messagesType = {
    id: number
    message: string
}


const state: stateType = {
    profilePage: {
        posts: [
            {id: 1, msg: 'sdfsdf sdf', likes: 2},
            {id: 2, msg: 'ddd', likes: 234},
            {id: 3, msg: 'gggd d ', likes: 232},
            {id: 4, msg: 'dd ', likes: 23552},
        ],

    },
    dialogsPage: {
        dialogs: [
            {userId: 1, userName: 'King'},
            {userId: 2, userName: 'Czar'},
            {userId: 3, userName: 'Holop'},
            {userId: 4, userName: 'Zopa'},
        ],
        messages: [
            {id: 1, message: 'dfg dfgdfg sdgff'},
            {id: 2, message: 'jkl jklhjklhjkl hjklhjkl'},
            {id: 3, message: 'z xczXCZXCzxcv  vcxcxz'},
            {id: 4, message: '[pp[ppo[ npb[ po [ op[ '},
            {id: 5, message: ' sadsgtykjui  kl ll kl k'},
        ],
    },
}

export default state