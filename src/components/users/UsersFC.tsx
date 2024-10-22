import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/ava.webp";
import {usersType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersFCPT = {
    onPageChanged: (p: number) => void
    state: usersType[]
    pageSize: number
    totalUsersCount: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
}
const UsersFC = ({
                     totalUsersCount,
                     state,
                     pageSize,
                     currentPage,
                     unfollow,
                     follow,
                     onPageChanged
                 }: UsersFCPT) => {
    const pagesCount: number = Math.ceil(totalUsersCount / pageSize)
    const pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.usersPage}>


            <div className={s.paginationBtns}>
                {
                    pages.map((p, i) => (
                        <span
                            key={i}
                            className={currentPage === p ? s.selected : ''}
                            onClick={() => onPageChanged(p)}
                        >{p}</span>
                    ))
                }
            </div>

            {
                state.map(u => (
                    <div className={s.user} key={u.id}>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    className={s.ava}
                                    src={u.photos.small ? u.photos.small : userPhoto}
                                    alt={'ava'}
                                />
                            </NavLink>
                        </div>
                        <div>
                            <div>
                                {u.followed
                                    ? <button

                                        onClick={() => {
                                            axios.delete(
                                                `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": '733dfb2b-ad38-4924-a41f-9ae9ca6660c4'
                                                    }
                                                })
                                                .then(res => {
                                                    if (res.data.resultCode === 0) {
                                                        unfollow(u.id)
                                                    }
                                                })
                                        }}

                                    >отписаться
                                    </button>

                                    : <button

                                        onClick={() => {
                                            axios.post(
                                                `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": '733dfb2b-ad38-4924-a41f-9ae9ca6660c4'
                                                    }
                                                })
                                                .then(res => {
                                                    if (res.data.resultCode === 0) {
                                                        follow(u.id)
                                                    }
                                                })
                                        }}

                                    >подписаться
                                    </button>}
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
            }
        </div>
    );
};

export default UsersFC;