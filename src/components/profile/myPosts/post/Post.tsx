import React from 'react';
import s from './Post.module.css'


const ava = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCp_-DchjKdc2dAuNJYtC0xTgBovaS0DA8EA&s'
const Post = () => {
    return (
        <div className={s.item}>
            <img src={ava} alt=""/>
            Post1
            <div>
                0 LIKE
            </div>
        </div>
    );
};

export default Post;