import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/ava.webp";
import {usersType} from "../../redux/store";
import {NavLink} from "react-router-dom";

type UsersFCPT = {
    onPageChanged: (p: number) => void
    state: usersType[]
    pageSize: number
    totalUsersCount: number
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
    currentPage: number

    followingInProgress: number[] | []


}
const UsersFC = ({
                     totalUsersCount,
                     state,
                     pageSize,
                     currentPage,
                     unFollowThunkCreator,
                     followThunkCreator,
                     onPageChanged,

                     followingInProgress
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
                                        disabled={followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            unFollowThunkCreator(u.id)}}

                                    >отписаться
                                    </button>

                                    : <button
                                        disabled={followingInProgress.some(id => id === u.id)}


                                        onClick={() => {
                                            followThunkCreator(u.id)
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