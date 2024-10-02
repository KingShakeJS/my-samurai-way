import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {actionsTypes, profilePageType} from "../../../redux/state";

type MyPostsPT = {
    state: profilePageType
    dispatch: (action: actionsTypes) => void
}
const MyPosts = ({state, dispatch}: MyPostsPT) => {

    const addPostHandler = () => {
        dispatch({type:"ADD-POST"})
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value})
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