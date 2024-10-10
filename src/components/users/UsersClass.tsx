import React, {Component} from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/ava.webp";
import axios from "axios";
import {usersType} from "../../redux/store";

type UsersPT = {
    state: usersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType[]) => void
}

class UsersClass extends Component<UsersPT> {

    constructor(props:UsersPT) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items)
        })
    }

    getUsers = () => {
        alert('заглушка')
    }

    render() {
        return (
            <div className={s.usersPage}>
                <button onClick={this.getUsers}>getUsers</button>
                {
                    this.props.state.map(u => (
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
                                        ? <button onClick={() => this.props.unfollow(u.id)}>отписаться</button>
                                        : <button onClick={() => this.props.follow(u.id)}>подписаться</button>}
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
    }
}

export default UsersClass