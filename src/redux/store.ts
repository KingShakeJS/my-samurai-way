import {addPostAC, setStatusAC, setUserProfile, updateNewPostTextAC} from "./reducers/profile-reducer";
import {sendMsgAC, updateNewMsgValueAC} from "./reducers/dialogs-reducer";
import {v1} from "uuid";
import {
    follow,
    setCurrentPage, setFollowingInProgress,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./reducers/users-reducer";
import {setUserData} from "./reducers/auth-reducer";
import {initializedSuccess} from "./reducers/app-reducer";


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
export type followActionType = ReturnType<typeof follow>
export type unfollowActionType = ReturnType<typeof unfollow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type setToggleIsFetchingActionType = ReturnType<typeof setToggleIsFetching>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type setUserDataActionType = ReturnType<typeof setUserData>
export type setFollowingInProgressActionType = ReturnType<typeof setFollowingInProgress>
export type setStatusActionType = ReturnType<typeof setStatusAC>
export type initializedSuccessType = ReturnType<typeof initializedSuccess>
export type actionsTypes =
    addPostActionType
    | updateNewPostTextActionType
    | updateNewMsgValueActionType
    | sendMsgActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | setToggleIsFetchingActionType
    | setUserProfileActionType
    | setUserDataActionType
    | setFollowingInProgressActionType
    | setStatusActionType
    | initializedSuccessType


// типизация всего state //////////////////////////////////////////////////////////////////////////////
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
// типизация страниц / вложенности первого уровня///////////////////////////////////////////////////////
export type profilePageType = {
    inputValue: string
    posts: Array<potsType>
    profile: profileType | null
    status: string

}

export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMsgValue: string
}

export type usersPageType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[] | []
}
// типизвция вложенности второго уровня/////////////////////////////////////////////////////////////////

export type profileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website:string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube:string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}

export type usersType = {
    followed: boolean
    id: number
    name: string
    photos: {
        large: string | null
        small: string | null
    }
    status: string | null
    uniqueUrlName: string | null

}

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









