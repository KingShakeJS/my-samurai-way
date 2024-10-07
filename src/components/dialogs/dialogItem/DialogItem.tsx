import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {dialogsType} from "../../../redux/store";


const DialogItem = ({userId, userName}: dialogsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${userId}`} activeClassName={s.active}>{userName}</NavLink>
        </div>
    );
};

export default DialogItem;