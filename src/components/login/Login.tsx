import * as React from 'react';
import {FormData, ReduxLoginForm} from "./loginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import {appStateType} from "../../redux/redux-store";

type LoginProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth:boolean
};
const Login = ({login, isAuth}: LoginProps) => {
    const onSubmitHandler = (formData: FormData) => {
        login(formData.login, formData.password, formData.rememberMe)
    }


    if (isAuth){
        return <Redirect to={'/profile'}></Redirect>
    }

    return (
        <div>

            <h1>Login</h1>

            <ReduxLoginForm
                onSubmit={onSubmitHandler}
            />

        </div>
    );
};
type mapStateToPropsType={
    isAuth:boolean
}
const mapStateToProps = (state: appStateType):mapStateToPropsType => {
  return{
      isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, {
    login
})(Login)