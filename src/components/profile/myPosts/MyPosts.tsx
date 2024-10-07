import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {profilePageType} from "../../../redux/store";

type MyPostsPT = {
    addPost: () => void
    onPostChange: (text: string) => void
    state: profilePageType
}


const MyPosts = ({onPostChange, addPost, state}: MyPostsPT) => {

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        onPostChange(text)
    }

    const addPostHandler = () => {
        addPost()
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
                        onClick={addPostHandler}
                    >добавить пост
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