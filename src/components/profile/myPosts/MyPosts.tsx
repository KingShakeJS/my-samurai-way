import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {potsType} from "../../../redux/state";

type MyPostsPT = {
    posts: Array<potsType>
}
const MyPosts = ({posts}: MyPostsPT) => {


    return (
        <div className={s.postsBlock}>

            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>добавить пост</button>
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