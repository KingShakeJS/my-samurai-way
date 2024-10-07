import React from 'react';
import s from './Post.module.css'
import {potsType} from "../../../../redux/store";


const ava = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCp_-DchjKdc2dAuNJYtC0xTgBovaS0DA8EA&s'


const Post = ({msg, likes, id}: potsType) => {
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