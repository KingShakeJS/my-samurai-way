import {profilePageType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {appStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";

type mapStateToPropsType = {
    state: profilePageType
}
type mapDispatchToPropsType = {
    addPost: (value: string) => void
    onPostChange: (text: string) => void
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (value: string) => {
            dispatch(addPostAC(value))
        },

        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;