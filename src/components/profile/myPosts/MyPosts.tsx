import React from 'react';
import s from './MyPosts.module.css'
import Post, {PostPT} from "./post/Post";


const MyPosts = () => {

    const postsData: Array<PostPT> = [
        {id: 1, msg: 'sdfsdf sdf', likes: 2},
        {id: 2, msg: 'ddd', likes: 234},
        {id: 3, msg: 'gggd d ', likes: 232},
        {id: 4, msg: 'dd ', likes: 23552},
    ]

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
                <Post msg={postsData[0].msg} id={postsData[0].id} likes={postsData[0].likes}/>
                <Post msg={postsData[1].msg} id={postsData[1].id} likes={postsData[1].likes}/>
                <Post msg={postsData[2].msg} id={postsData[2].id} likes={postsData[2].likes}/>
                <Post msg={postsData[3].msg} id={postsData[3].id} likes={postsData[3].likes}/>
            </div>
        </div>
    );
};

export default MyPosts;