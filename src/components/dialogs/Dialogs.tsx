import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>

            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/1'} activeClassName={s.active}>Dimych1</NavLink>
                </div>
                <div className={`${s.dialog}`}>
                    <NavLink to={'/dialogs/2'} activeClassName={s.active}>Dimych2</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'} activeClassName={s.active}>Dimych3</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.msg}>
                    ываыва ыва ыув а ыва ыв ыва111
                </div>
                <div className={s.msg}>
                    ываыва ыва ыув а ыва ыв ыва222
                </div>
                <div className={s.msg}>
                    ываыва ыва ыув а ыва ыв ыва333
                </div>
            </div>

        </div>
    );
};

export default Dialogs;