import React, {Component} from "react";
import {usersType} from "../../redux/store";
import UsersFC from "./UsersFC";
import PreLoader from "../common/preLoader/PreLoader";
import {userAPI} from "../../api/api";

export type UsersClassPT = {
    state: usersType[]
    pageSize: number
    totalUsersCount: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType[]) => void
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (currentPage: number) => void
    isFetching: boolean
    setToggleIsFetching: (isFetching: boolean) => void

}

class UsersClass extends Component<UsersClassPT> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setUsers(data.items)
            this.props.setToggleIsFetching(false)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(p)
        userAPI.getUsers(p, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setToggleIsFetching(false)
        })
    }
    getUsers = () => {
        alert('заглушка')
    }

    render() {


        return (
            <>
                {
                    this.props.isFetching
                        ? <PreLoader/>
                        : null
                }

                <UsersFC
                    state={this.props.state}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    follow={this.props.follow}
                    totalUsersCount={this.props.totalUsersCount}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

export default UsersClass