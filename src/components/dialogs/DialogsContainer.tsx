import React from 'react';
import Dialogs from "./Dialogs";
import {actionsTypes, dialogsPageType} from "../../redux/store";
import {sendMsgAC, updateNewMsgValueAC} from "../../redux/dialogs-reducer";


type DialogsContainerPT = {
    state: dialogsPageType
    dispatch: (action: actionsTypes) => void
}
const DialogsContainer = ({state, dispatch}: DialogsContainerPT) => {

    const onSendMsgClick = () => {
        dispatch(sendMsgAC())
    }

    const onNewMsgChange = (text:string) => {
        dispatch(updateNewMsgValueAC(text))

    }

    return (
        <Dialogs
            state={state}
            onNewMsgChange={onNewMsgChange}
            onSendMsgClick={onSendMsgClick}
        />
    );
};

export default DialogsContainer;