import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";


const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
})
export type appStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

