let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you!?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: "it-kamasutra.ca"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Dimych', img: "https://cdn.dribbble.com/users/2364329/screenshots/4707722/dribbble-01.jpg"},
                {id: 2, name: 'Andrew', img: "https://avachara.com/avatar/gallery/chara180131163032_7515.jpg"},
                {id: 3, name: 'Sveta', img: "https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"},
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
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state changed");
        },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {//{ type: "ADD-POST' }
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.newPostText.length > 0? this._state.profilePage.posts.push(newPost): console.log("Empty post");
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
window.state = store;