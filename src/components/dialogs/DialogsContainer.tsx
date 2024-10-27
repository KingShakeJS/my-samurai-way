import Dialogs from "./Dialogs";
import {dialogsPageType} from "../../redux/store";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {sendMsgAC, updateNewMsgValueAC} from "../../redux/reducers/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import React from "react";
import {AddMsgFormDataType} from "../common/form/AddMsgForm";

type mapStateToPropsType = {
    state: dialogsPageType

}

type mapDispatchToPropsType = {
    onSendMsgClick: (value: string) => void
    onNewMsgChange: (text: string) => void
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.dialogsPage,

    }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onSendMsgClick: (value: string) => {
            dispatch(sendMsgAC(value))
        },

        onNewMsgChange: (text: string) => {
            dispatch(updateNewMsgValueAC(text))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);