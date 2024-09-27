import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";


const MyPosts = () => {
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
                <Post
                    msg={'дратути'}
                    likes={228}
                />

                <Post
                    msg={'дороу'}
                    likes={1488}
                />

                <Post
                    msg={'привет'}
                    likes={100500}
                />
            </div>
        </div>
    );
};

export default MyPosts;