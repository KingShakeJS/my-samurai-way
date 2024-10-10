import React, {Component} from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/ava.webp";
import axios from "axios";
import {usersType} from "../../redux/store";

type UsersPT = {
    state: usersType[]
    pageSize: number
    totalUsersCount: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType[]) => void
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (currentPage: number) =>void


}

class UsersClass extends Component<UsersPT> {

    constructor(props: UsersPT) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setTotalUsersCount(res.data.totalCount)

                this.props.setUsers(res.data.items)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {

                this.props.setUsers(res.data.items)
            })
    }


    getUsers = () => {
        alert('заглушка')
    }

    render() {

        const pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages: Array<number> = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.usersPage}>
                <button onClick={this.getUsers}>getUsers</button>


                <div className={s.paginationBtns}>
                    {
                        pages.map((p, i) => (
                            <span
                                key={i}
                                className={this.props.currentPage === p ? s.selected : ''}
                                onClick={() => this.onPageChanged(p)}
                            >{p}</span>
                        ))
                    }
                </div>

                {
                    this.props.state.map(u => (
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