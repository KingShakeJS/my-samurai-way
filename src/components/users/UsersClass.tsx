import React, {Component} from "react";
import axios from "axios";
import {usersType} from "../../redux/store";
import UsersFC from "./UsersFC";

export type UsersClassPT = {
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

class UsersClass extends Component<UsersClassPT> {

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



        return <UsersFC
        state={this.props.state}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        follow={this.props.follow}
        totalUsersCount={this.props.totalUsersCount}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        />
    }
}

export default UsersClass