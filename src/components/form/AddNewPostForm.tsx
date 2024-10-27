import * as React from 'react';
import {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredFields} from "../../utils/validators/validators";
import {TextArea} from "../common/formsControls/FormsControls";

export type AddNewPostFormDataType = {
    addNewPost: string
}
const max = maxLengthCreator(10)

const AddNewPostForm: FC<InjectedFormProps<AddNewPostFormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name={'addNewPost'}
                    component={TextArea}
                    placeholder={'введите сообщение'}
                    validate={[requiredFields, max]}
                ></Field>
            </div>
            <div>
                <button>добавить пост</button>
            </div>
        </form>
    );
};

export const ReduxAddNewPostForm = reduxForm<AddNewPostFormDataType>({form: 'profileAddNewPost'})(AddNewPostForm)