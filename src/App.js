import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*DialogsContainer is external wrapper of Dialogs.jsx and takes all interfaces directly communicating with Store. Advantage: we can use Dialogs.jsx in other projects as it is 'clean'(directly not tied to Redux)*/}
                    <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} /> }/>
                    <Route path='/profile' render={ () => <Profile store={props.store} /> }/>
                </div>
            </div>)};

export default App;