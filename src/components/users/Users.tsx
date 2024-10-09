import React from 'react';
import s from './Users.module.css'
import {usersType} from "../../redux/store";
import {v1} from "uuid";
import {pu1} from "../../redux/reducers/photoUsers";

type UsersPT = {
    state: usersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: usersType[]) => void

}
const Users = ({state, follow, unfollow, setUsers}: UsersPT) => {
    const followHandler = (id: string) => {
        follow(id)
    }
    const unfollowHandler = (id: string) => {
        unfollow(id)
    }
    const setUsersHandler = () => {
        setUsers(state)
    }


    if (state.length === 0) {
        setUsers([
            {
                id: v1(),
                photoUrl: pu1,
                followed: true,
                fullName: 'Dmitro',
                status: 'im king',
                location: {citi: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: pu1,
                followed: false,
                fullName: 'Dmitro1',
                status: 'im king1',
                location: {citi: 'Minsk1', country: 'Belarus1'}
            },
            {
                id: v1(),
                photoUrl: pu1,
                followed: true,
                fullName: 'Dmitro2',
                status: 'im king2',
                location: {citi: 'Minsk2', country: 'Belarus2'}
            },
        ])

    }

    const userList = state.map(u => (
        <div className={s.user} key={u.id}>


            <div>
                <img
                    className={s.ava}
                    src={u.photoUrl}
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>

                    <div>
                        <div>{u.location.citi}</div>
                        <div>{u.location.country}</div>
                    </div>

                </div>
            </div>


        </div>
    ))

    return (
        <div className={s.usersPage}>
            {
                userList
            }
        </div>
    );
};

export default Users;