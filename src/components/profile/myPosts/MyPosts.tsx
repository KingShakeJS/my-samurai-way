import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {profilePageType} from "../../../redux/store";
import {AddNewPostFormDataType, ReduxAddNewPostForm} from "../../form/AddNewPostForm";

type MyPostsPT = {
    addPost: (value: string) => void
    onPostChange: (text: string) => void
    state: profilePageType
}


const MyPosts = ({onPostChange, addPost, state}: MyPostsPT) => {



    const addPostHandler = (formData:AddNewPostFormDataType) => {
        console.log(formData.addNewPost)
        addPost(formData.addNewPost)
    }

    return (
        <div className={s.postsBlock}>

            <h3>MyPosts</h3>
            <ReduxAddNewPostForm
                onSubmit={addPostHandler}
            />

            <div className={s.posts}>
                {
                    state.posts.map(p => <Post key={p.id} msg={p.msg} id={p.id} likes={p.likes}/>)
                }
            </div>
        </div>
    );
};

export default MyPosts;