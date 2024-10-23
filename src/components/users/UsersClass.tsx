import React, {Component} from "react";
import {usersType} from "../../redux/store";
import UsersFC from "./UsersFC";
import PreLoader from "../common/preLoader/PreLoader";


export type UsersClassPT = {
    state: usersType[]
    pageSize: number
    totalUsersCount: number
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
    setUsers: (users: usersType[]) => void
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (currentPage: number) => void
    isFetching: boolean
    setToggleIsFetching: (isFetching: boolean) => void

    followingInProgress: number[] | []
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

class UsersClass extends Component<UsersClassPT> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {

        this.props.getUsersThunkCreator(p, this.props.pageSize)


        // this.props.setToggleIsFetching(true)
        // this.props.setCurrentPage(p)
        // userAPI.getUsers(p, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.setToggleIsFetching(false)
        // })
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
                    followThunkCreator={this.props.followThunkCreator}
                    totalUsersCount={this.props.totalUsersCount}
                    unFollowThunkCreator={this.props.unFollowThunkCreator}
                    onPageChanged={this.onPageChanged}

                    followingInProgress={this.props.followingInProgress}

                />
            </>
        )
    }
}

export default UsersClass