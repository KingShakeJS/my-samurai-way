import React from 'react';
import './App.css';
import NavBar from "./components/navBar/NavBar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import RootProfileContainer from "./components/profile/ProfileClassContainer";
import {RootHeaderContainer} from "./components/header/HeaderClassContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import {appStateType} from "./redux/redux-store";
import PreLoader from "./components/common/preLoader/PreLoader";


// урок 82
type AppType={
    initializeApp:()=>void
    initialized: boolean
}

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
if (!this.props.initialized){
return <PreLoader/>
}

        return (

            <div className='app-wrapper'>

                <RootHeaderContainer/>

                <NavBar/>

                <div className={'Content'}>

                    <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>

                    <Route render={() => <RootProfileContainer/>} path={'/profile/:userId?'}/>

                    <Route render={() => <UsersContainer/>} path={'/users'}/>

                    <Route render={() => <Login/>} path={'/login'}/>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state: appStateType) => {
  return{
      initialized: state.app.initialized
  }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps,{
        initializeApp
    })
)(App)



