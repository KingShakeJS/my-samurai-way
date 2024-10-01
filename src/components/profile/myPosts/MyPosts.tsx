import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {profilePageType} from "../../../redux/state";

type MyPostsPT = {
    state: profilePageType
    addPost: () => void
    updateInputValue: (newText: string) => void

}
const MyPosts = ({state, addPost, updateInputValue}: MyPostsPT) => {

    const addPostHandler = () => {
        addPost()
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateInputValue(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>

            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea
                        value={state.inputValue}
                        onChange={onPostChangeHandler}
                    ></textarea>
                </div>
                <div>
                    <button
                        onClick={
                            addPostHandler
                        }>добавить пост
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                {
                    state.posts.map(p => <Post key={p.id} msg={p.msg} id={p.id} likes={p.likes}/>)
                }
            </div>
        </div>
    );
};

export default MyPosts;