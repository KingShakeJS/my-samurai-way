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
                <DialogItem userId={dialogsData[0].userId} userName={dialogsData[0].userName}/>
                <DialogItem userId={dialogsData[1].userId} userName={dialogsData[1].userName}/>
                <DialogItem userId={dialogsData[2].userId} userName={dialogsData[2].userName}/>
                <DialogItem userId={dialogsData[3].userId} userName={dialogsData[3].userName}/>
            </div>

            <div className={s.messages}>
                <Msg message={messagesData[0].message} id={messagesData[0].id}/>
                <Msg message={messagesData[1].message} id={messagesData[1].id}/>
                <Msg message={messagesData[2].message} id={messagesData[2].id}/>
                <Msg message={messagesData[3].message} id={messagesData[3].id}/>
                <Msg message={messagesData[4].message} id={messagesData[4].id}/>
            </div>

        </div>
    );
};

export default Dialogs;