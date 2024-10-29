import * as React from 'react';
import {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";
import {appStateType} from "../../redux/redux-store";


export type HeaderClassContainerProps = {
    isAuth: boolean
    login: string | null
    logout:()=>void

};

class HeaderClassContainer extends Component<HeaderClassContainerProps> {
    // componentDidMount() {
    //     this.props.getAuthUserDataThunkCreator()
    // }

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
    logout
})(HeaderClassContainer)