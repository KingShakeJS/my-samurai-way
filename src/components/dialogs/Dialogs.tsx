import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Msg from "./msg/Msg";
import {actionsTypes, dialogsPageType,} from "../../redux/state";
import {sendMsgAC, updateNewMsgValueAC} from "../../redux/dialogs-reducer";


type DialogsPT = {
    state: dialogsPageType
    dispatch: (action: actionsTypes) => void
}
const Dialogs = ({state, dispatch}: DialogsPT) => {

    const onSendMsgClickHandler = () => {
        dispatch(sendMsgAC())
    }
    const onNewMsgChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMsgValueAC(e.currentTarget.value))
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