import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    // Dialogs.jsx is a presentational component. It receives only necessary props and is "clean" meaning nothing unnecessary. Also it doesn't have to communicate with store directly. Advantage: we can use it in other projects as it is 'clean'(directly not tied to Redux)
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };

                let onNewMessageChange = (body) => {
                    let action = updateNewMessageBodyCreator(body);
                    store.dispatch(action);
                };

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;