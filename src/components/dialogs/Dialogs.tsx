import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Msg from "./msg/Msg";
import {dialogsPageType,} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {AddMsgFormDataType, ReduxAddMsgForm} from "../common/form/AddMsgForm";


type DialogsPT = {
    state: dialogsPageType
    onSendMsgClick: (value: string) => void
    onNewMsgChange: (text: string) => void


}
const Dialogs = ({state, onSendMsgClick, onNewMsgChange}: DialogsPT) => {


    const onNewMsgChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onNewMsgChange(e.currentTarget.value)
    }
    
    const addNewMsg = (formData:AddMsgFormDataType) => {
        console.log(formData.newMsgBody)
        onSendMsgClick(formData.newMsgBody)
    }



    return (
        <div className={s.Dialogs}>

            <div className={s.dialogsItems}>
                {
                    state.dialogs.map(el => <DialogItem key={el.userId} userId={el.userId} userName={el.userName}/>)
                }
            </div>

            <div className={s.messages}>

                <div>
                    {
                        state.messages.map(m => <Msg key={m.id} message={m.message} id={m.id}/>)
                    }
                </div>

                <ReduxAddMsgForm
                    onSubmit={addNewMsg}
                />

            </div>

        </div>
    );
};

export default Dialogs;