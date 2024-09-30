import React from 'react';
import s from './MyPosts.module.css'
import Post, {PostPT} from "./post/Post";

type MyPostsPT = {
    posts: Array<PostPT>
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
                    posts.map(p => <Post msg={p.msg} id={p.id} likes={p.likes}/>)
                }
            </div>
        </div>
    );
};

export default MyPosts;