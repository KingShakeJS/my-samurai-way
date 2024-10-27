import * as React from 'react';
import {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormData} from "../login/loginForm/LoginForm";
import {TextArea} from "../common/formsControls/FormsControls";
import {maxLengthCreator, requiredFields} from "../../utils/validators/validators";

export type AddMsgFormDataType={
    newMsgBody: string
}
const max = maxLengthCreator(50)
const AddMsgForm: FC<InjectedFormProps<AddMsgFormDataType>> = ({handleSubmit})  => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                        <Field
                            name={'newMsgBody'}
                            component={TextArea}
                            placeholder={'введите сообщение'}
                            validate={[requiredFields, max]}
                        ></Field>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    );
};

export const ReduxAddMsgForm = reduxForm<AddMsgFormDataType>({form: 'dialogAddMsg'})(AddMsgForm)