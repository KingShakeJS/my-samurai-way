import Dialogs from "./Dialogs";
import {dialogsPageType} from "../../redux/store";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {sendMsgAC, updateNewMsgValueAC} from "../../redux/reducers/dialogs-reducer";
import {Redirect} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    state: dialogsPageType

}

type mapDispatchToPropsType = {
    onSendMsgClick: () => void
    onNewMsgChange: (text: string) => void
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.dialogsPage,

    }
}



let AuthRedirectComponent: any = withAuthRedirect(Dialogs)
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onSendMsgClick: () => {
            dispatch(sendMsgAC())
        },

        onNewMsgChange: (text: string) => {
            dispatch(updateNewMsgValueAC(text))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer;