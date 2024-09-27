import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPT = {
    userId: number
    userName: string
}
const DialogItem = ({userId, userName}: DialogItemPT) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${userId}`} activeClassName={s.active}>{userName}</NavLink>
        </div>
    );
};

export default DialogItem;