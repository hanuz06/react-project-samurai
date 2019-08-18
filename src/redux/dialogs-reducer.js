const  UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const  SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            img: "https://cdn.dribbble.com/users/2364329/screenshots/4707722/dribbble-01.jpg"
        },
        {
            id: 2,
            name: 'Andrew',
            img: "https://avachara.com/avatar/gallery/chara180131163032_7515.jpg"
        },
        {
            id: 3,
            name: 'Sveta',
            img: "https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"},
        {
            id: 4,
            name: 'Sasha',
            img: "https://pbs.twimg.com/profile_images/509529944431407104/PJITGbsA_400x400.jpeg"
        },
        {
            id: 5,
            name: 'Viktor',
            img: "https://avatoon.net/wp-content/uploads/2018/07/Alex-Custom-Avatar-Design.jpg"
        },
        {
            id: 6,
            name: 'Valera',
            img: "https://cdn.dribbble.com/users/3162963/screenshots/6763039/cartoon-1_1_1_2x.jpg"
        }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state=initialState, action) =>{

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            body.length > 0? state.messages.push({id: 6, message: body}) : alert("Please enter text");
            return state;
        default:
            return state;
    }
};

//Action creators used by UI part. Functions are imported directly in UI files from store.js
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = body =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body:body});

export default dialogsReducer