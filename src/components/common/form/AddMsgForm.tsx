import * as React from 'react';
import {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormData} from "../../login/loginForm/LoginForm";

export type AddMsgFormDataType={
    newMsgBody: string
}
const AddMsgForm: FC<InjectedFormProps<AddMsgFormDataType>> = ({handleSubmit})  => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                        <Field
                            name={'newMsgBody'}
                            component={'textarea'}
                            placeholder={'введите сообщение'}
                        ></Field>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    );
};

export const ReduxAddMsgForm = reduxForm<AddMsgFormDataType>({form: 'dialogAddMsg'})(AddMsgForm)