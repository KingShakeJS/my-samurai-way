import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FC} from "react";

type Props = {
    onSubmitHandler: (formData: FormData) => void
};

export type FormData = {
    login: string
    password: string
    rememberMe: boolean

}
export const LoginForm: FC<InjectedFormProps<FormData>> = ({handleSubmit}) => {

    return (
        <form
            onSubmit={handleSubmit}
        >

            <div>
                <Field
                    name={'login'}
                    placeholder={'login'}
                    component={'input'}
                />
            </div>

            <div>
                <Field
                    name={'password'}
                    placeholder={'password'}
                    component={'input'}
                />

            </div>

            <div>
                <Field
                    name={'rememberMe'}
                    component={'input'}
                    type="checkbox"
                /> remember me
            </div>

            <div>
                <button>Зарегистрироваться</button>
            </div>

        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormData>({form: 'login'})(LoginForm)