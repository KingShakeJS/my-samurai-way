import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {potsType} from "../../../redux/state";

type MyPostsPT = {
    posts: Array<potsType>
}
const MyPosts = ({posts}: MyPostsPT) => {

    const postElements = createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        const text = postElements.current?.value
        alert(text)
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