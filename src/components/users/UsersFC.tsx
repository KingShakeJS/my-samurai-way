import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/ava.webp";
import {usersType} from "../../redux/store";

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
                            <img
                                className={s.ava}
                                src={u.photos.small ? u.photos.small : userPhoto}
                                alt={'ava'}
                            />
                        </div>
                        <div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => unfollow(u.id)}>отписаться</button>
                                    : <button onClick={() => follow(u.id)}>подписаться</button>}
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