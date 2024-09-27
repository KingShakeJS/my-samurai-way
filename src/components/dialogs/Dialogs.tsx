import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>

            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    Dimych2
                </div>
                <div className={s.dialog}>
                    Dimych3
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.msg}>
                    ываыва ыва ыув а ыва ыв ыва
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