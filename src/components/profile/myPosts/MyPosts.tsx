import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";


const MyPosts = () => {
    return (
        <div>
            MyPosts

            <div>
                <textarea></textarea>
                <button>добавить пост</button>
            </div>

            <div className='posts'>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;