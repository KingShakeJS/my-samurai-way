import React from 'react';
import s from './Dialogs.module.css'
import DialogItem, {DialogItemPT} from "./dialogItem/DialogItem";
import Msg, {MsgPt} from "./msg/Msg";


type DialogsPT = {
    dialogs: Array<DialogItemPT>
    messages: Array<MsgPt>
}
const Dialogs = ({dialogs, messages}: DialogsPT) => {


    return (
        <div className={s.Dialogs}>

            <div className={s.dialogsItems}>
                {
                    dialogs.map(el => <DialogItem userId={el.userId} userName={el.userName}/>)
                }
            </div>

            <div className={s.messages}>
                {
                    messages.map(m => <Msg message={m.message} id={m.id}/>)
                }
            </div>

        </div>
    );
};

export default Dialogs;