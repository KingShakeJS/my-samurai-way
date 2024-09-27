import React from 'react';
import s from './Msg.module.css'

export type MsgPt = {
    id: number
    message: string
}
const Msg = ({message, id}: MsgPt) => {
    return (
        <div className={s.msg}>
            {message}
        </div>
    );
};

export default Msg;