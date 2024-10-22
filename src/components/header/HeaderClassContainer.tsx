// @flow
import * as React from 'react';
import {Component} from "react";
import Header, {HeaderProps} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authType, setUserData, setUserDataACT} from "../../redux/reducers/auth-reducer";
import {appStateType} from "../../redux/redux-store";


export type HeaderClassContainerProps = {
    isAuth: boolean
    login: string | null
    setUserData: (userId: null | string | number, email: null | string, login: null | string, isAuth: boolean) => setUserDataACT
};

class HeaderClassContainer extends Component<HeaderClassContainerProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    const {login, email, id} = res.data.data
                    this.props.setUserData(id, email, login, true)
                }
            })
    }

    render() {

        return (

            <Header
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state: appStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export const RootHeaderContainer = connect(mapStateToProps, {
    setUserData
})(HeaderClassContainer)