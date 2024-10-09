import Dialogs from "./Dialogs";
import {dialogsPageType} from "../../redux/store";
import {sendMsgAC, updateNewMsgValueAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    state: dialogsPageType
}

type mapDispatchToPropsType = {
    onSendMsgClick: () => void
    onNewMsgChange: (text: string) => void
}
const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        state: state.dialogsPage
    }
}
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;