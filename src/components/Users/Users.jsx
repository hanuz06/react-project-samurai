import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            //         {
            //             id: 1,
            //             photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
            //             followed: false,
            //             fullName: 'Dmitry',
            //             status: 'I am a boss',
            //             location: {city: 'Minsk', country: "Belarus"}
            //         }

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);

            });
        }
    };


    //Returns jsx data
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;