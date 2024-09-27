import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Msg from "./msg/Msg";

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem userId={1} userName={'King'}/>
                <DialogItem userId={2} userName={'Czar'}/>
                <DialogItem userId={3} userName={'Holop'}/>
                <DialogItem userId={4} userName={'Zopa'}/>
            </div>

            <div className={s.messages}>
                <Msg message={'Lorem ipsum dolor sit amet.'}/>
                <Msg message={'Lorem ipsum dolor.'}/>
                <Msg message={'Lorem ipsum dolor sit amet.'}/>
            </div>

        </div>
    );
};

export default Dialogs;