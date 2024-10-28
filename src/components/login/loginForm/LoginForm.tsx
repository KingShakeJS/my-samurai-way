import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FC} from "react";
import {Input} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, requiredFields} from "../../../utils/validators/validators";
import s from './../../common/formsControls/FormsControls.module.css'

type Props = {
    onSubmitHandler: (formData: FormData) => void
};

export type FormData = {
    login: string
    password: string
    rememberMe: boolean

}
const max = maxLengthCreator(30)

export const LoginForm: FC<InjectedFormProps<FormData>> = ({handleSubmit, error}) => {

    return (
        <form
            onSubmit={handleSubmit}
        >

            <div>
                <Field
                    name={'login'}
                    placeholder={'login'}
                    component={Input}
                    validate={[requiredFields, max]}
                />
            </div>

            <div>
                <Field
                    name={'password'}
                    placeholder={'password'}
                    component={Input}
                    validate={[requiredFields, max]}
                />

            </div>

            <div>
                <Field
                    name={'rememberMe'}
                    component={Input}
                    type="checkbox"
                /> remember me
            </div>
            {
                error && <div className={s.formControlSummaryErr}>{error}</div>

            }


            <div>
                <button>Зарегистрироваться</button>
            </div>

        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormData>({form: 'login'})(LoginForm)