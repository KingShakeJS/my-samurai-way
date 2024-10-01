import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Msg from "./msg/Msg";
import {dialogsPageType} from "../../redux/state";


type DialogsPT = {
  state: dialogsPageType
}
const Dialogs = ({state}: DialogsPT) => {


    return (
        <div className={s.Dialogs}>

            <div className={s.dialogsItems}>
                {
                    state.dialogs.map(el => <DialogItem key={el.userId} userId={el.userId} userName={el.userName}/>)
                }
            </div>

            <div className={s.messages}>
                {
                    state.messages.map(m => <Msg key={m.id} message={m.message} id={m.id}/>)
                }
            </div>

        </div>
    );
};

export default Dialogs;