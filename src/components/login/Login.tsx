import * as React from 'react';
import {FormData, ReduxLoginForm} from "./loginForm/LoginForm";

type Props = {};
export const Login = (props: Props) => {
    const onSubmitHandler = (formData: FormData) => {
        console.log(formData)
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