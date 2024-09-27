import React from 'react';
import s from './Dialogs.module.css'
import DialogItem, {DialogItemPT} from "./dialogItem/DialogItem";
import Msg, {MsgPt} from "./msg/Msg";

const Dialogs = () => {

    const dialogsData: Array<DialogItemPT> = [
        {userId: 1, userName: 'King'},
        {userId: 2, userName: 'Czar'},
        {userId: 3, userName: 'Holop'},
        {userId: 4, userName: 'Zopa'},
    ]

    const messagesData: Array<MsgPt> = [
        {id: 1, message: 'dfg dfgdfg sdgff'},
        {id: 2, message: 'jkl jklhjklhjkl hjklhjkl'},
        {id: 3, message: 'z xczXCZXCzxcv  vcxcxz'},
        {id: 4, message: '[pp[ppo[ npb[ po [ op[ '},
        {id: 5, message: ' sadsgtykjui  kl ll kl k'},
    ]


    return (
        <div className={s.Dialogs}>

            <div className={s.dialogsItems}>
                {
                    dialogsData.map(el => <DialogItem userId={el.userId} userName={el.userName}/>)
                }
            </div>

            <div className={s.messages}>
                {
                    messagesData.map(m => <Msg message={m.message} id={m.id}/>)
                }
            </div>

        </div>
    );
};

export default Dialogs;