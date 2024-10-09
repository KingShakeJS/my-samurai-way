import {profilePageType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {appStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    state: profilePageType
}
type mapDispatchToPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },

        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;