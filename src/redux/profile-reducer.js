const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you!?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: "it-kamasutra.ca"
};

const profileReducer = (state=initialState, action) =>{

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText.length > 0? state.posts.push(newPost): alert("Empty post");
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

//Action creators used by UI part. Functions are imported directly in UI files from store.js
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = text =>
    ({type: UPDATE_NEW_POST_TEXT, newText:text});

export default profileReducer;