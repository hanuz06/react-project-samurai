import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    //For rendering
    let state= props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) =>{
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };

    //MyPosts is a presentational component. It receives only necessary props and is "clean" meaning nothing unnecessary. Also it doesn't have to communicate with store directly. Advantage: we can use it in other projects as it is 'clean'(directly not tied to Redux)
    return < MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>
};

export default MyPostsContainer;