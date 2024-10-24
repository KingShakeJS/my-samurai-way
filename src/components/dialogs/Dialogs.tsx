import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Msg from "./msg/Msg";
import {dialogsPageType,} from "../../redux/store";
import {Redirect} from "react-router-dom";


type DialogsPT = {
    state: dialogsPageType
    onSendMsgClick: () => void
    onNewMsgChange: (text: string) => void


}
const Dialogs = ({state, onSendMsgClick, onNewMsgChange}: DialogsPT) => {

    const onSendMsgClickHandler = () => {
        onSendMsgClick()
    }
    const onNewMsgChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onNewMsgChange(e.currentTarget.value)
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

                <div>
                    <div>
                        <textarea
                            value={state.newMsgValue}
                            onChange={onNewMsgChangeHandler}
                            placeholder={'введите сообщение'}
                        ></textarea>
                    </div>
                    <div>
                        <button
                            onClick={onSendMsgClickHandler}
                        >Отправить
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dialogs;