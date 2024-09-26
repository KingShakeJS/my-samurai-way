import React from 'react';
import s from './Post.module.css'


const ava = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCp_-DchjKdc2dAuNJYtC0xTgBovaS0DA8EA&s'

type PostPT = {
    msg: string
    likes: number
}
const Post = ({msg, likes}: PostPT) => {
    return (
        <div className={s.item}>
            <img src={ava} alt=""/>
            {msg}
            <div>
                {likes} LIKE
            </div>
        </div>
    );
};

export default Post;