import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";
import {AuthReducer} from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
})
export type appStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

