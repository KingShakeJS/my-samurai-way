import React from 'react';
import s from './Users.module.css'
import {usersType} from "../../redux/store";
import axios from "axios";
import userPhoto from '../../assets/images/ava.webp'

type UsersPT = {
    state: usersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType[]) => void

}
const Users = ({state, follow, unfollow, setUsers}: UsersPT) => {
    const followHandler = (id: number) => {
        follow(id)
    }
    const unfollowHandler = (id: number) => {
        unfollow(id)
    }
const getUsers = () => {
    if (state.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res=>{
            // console.log(res.data.items)
            setUsers(res.data.items)
        })
    }

}

    const userList = state.map(u => (
        <div className={s.user} key={u.id}>
            <div>
                <img
                    className={s.ava}
                    src={u.photos.small ? u.photos.small : userPhoto}
                />
            </div>
            <div>
                <div>
                    {u.followed
                        ? <button onClick={() => unfollowHandler(u.id)}>отписаться</button>
                        : <button onClick={() => followHandler(u.id)}>подписаться</button>}
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    {/*<div>*/}
                    {/*    <div>{u.location.citi}</div>*/}
                    {/*    <div>{u.location.country}</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    ))

    return (
        <div className={s.usersPage}>
            <button onClick={getUsers}>getUsers</button>
            {
                userList
            }
        </div>
    );
};

export default Users;