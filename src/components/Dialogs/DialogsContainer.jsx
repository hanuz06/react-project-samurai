import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    };
    // Dialogs.jsx is a presentational component. It receives only necessary props and is "clean" meaning nothing unnecessary. Also it doesn't have to communicate with store directly. Advantage: we can use it in other projects as it is 'clean'(directly not tied to Redux)
    return <Dialogs updateNewMessageBody ={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>;

};

export default DialogsContainer;