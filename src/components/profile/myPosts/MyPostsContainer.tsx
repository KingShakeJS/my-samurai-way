import React from 'react';
import {actionsTypes, profilePageType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPT = {
    state: profilePageType
    dispatch: (action: actionsTypes) => void
}


const MyPostsContainer = ({state, dispatch}: MyPostsContainerPT) => {
    const addPost = () => {
        dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        dispatch(updateNewPostTextAC(text))
    }
    return (
        <MyPosts
            state={state}
            addPost={addPost}
            onPostChange={onPostChange}
        />
    )
};

export default MyPostsContainer;