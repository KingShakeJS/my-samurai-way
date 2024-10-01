import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {potsType} from "../../../redux/state";

type MyPostsPT = {
    posts: Array<potsType>
    addPost: (postMessage: string) => void
}
const MyPosts = ({posts, addPost}: MyPostsPT) => {

    const postElements = createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        if (postElements.current) {
            const text = postElements.current.value
            addPost(text)
            postElements.current.value = ''
        }
    }

    return (
        <div className={s.postsBlock}>

            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea
                        ref={postElements}
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
                    posts.map(p => <Post key={p.id} msg={p.msg} id={p.id} likes={p.likes}/>)
                }
            </div>
        </div>
    );
};

export default MyPosts;