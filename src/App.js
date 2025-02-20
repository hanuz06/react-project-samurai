import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*DialogsContainer is external wrapper of Dialogs.jsx and takes all interfaces directly communicating with Store(via dialogs-reducer.jsx). Advantage: we can use Dialogs.jsx in other projects as it is 'clean'(directly not tied to Redux)*/}
                    <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>
                    <Route path='/users' render={ () => <UsersContainer /> }/>
                </div>
            </div>)};

export default App;