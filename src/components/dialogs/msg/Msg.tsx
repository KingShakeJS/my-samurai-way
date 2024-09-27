import React from 'react';
import s from './Msg.module.css'

type MsgPt = {
    message: string
}
const Msg = ({message}: MsgPt) => {
    return (
        <div className={s.msg}>
            {message}
        </div>
    );
};

export default Msg;