
import * as React from 'react';
import {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddNewPostFormDataType={
    addNewPost:string
}

const AddNewPostForm: FC<InjectedFormProps<AddNewPostFormDataType>> = ({handleSubmit})  =>{
    return (
        <form onSubmit={handleSubmit}>
            <div>
                    <Field
                        name={'addNewPost'}
                        component={'textarea'}
                        placeholder={'введите сообщение'}
                    ></Field>
            </div>
            <div>
                <button>добавить пост</button>
            </div>
        </form>
    );
};

export const ReduxAddNewPostForm = reduxForm<AddNewPostFormDataType>({form: 'profileAddNewPost'})(AddNewPostForm)