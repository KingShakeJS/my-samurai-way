import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {actionsTypes, profilePageType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type MyPostsPT = {
    state: profilePageType
    dispatch: (action: actionsTypes) => void
}


const MyPosts = ({state, dispatch}: MyPostsPT) => {

    const addPostHandler = () => {
        dispatch(addPostAC())
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        dispatch(updateNewPostTextAC(text))
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