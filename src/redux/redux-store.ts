import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


const rootReducer = combineReducers({
    dialogsPage: dialogsReducer ,
    profilePage: profileReducer,
})
export type appStateType =ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

