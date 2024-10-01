import React from 'react';
import s from './Msg.module.css'
import {messagesType} from "../../../redux/state";


const Msg = ({message, id}: messagesType) => {
    return (
        <div className={s.msg}>
            {message}
        </div>
    );
};

export default Msg;