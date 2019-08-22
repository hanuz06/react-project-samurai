import React from 'react';
import styles from './users.module.css';

let Users = props => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: "Belarus"}
                },
                {
                    id: 2,
                    photoURL: 'https://bit.ly/2PaWiGA',
                    followed: true,
                    fullName: 'Anatoly',
                    status: 'I am very friendly',
                    location: {city: 'Seoul', country: "Korea"}
                },
                {
                    id: 3,
                    photoURL: 'https://bit.ly/2PaWiGA',
                    followed: false,
                    fullName: 'Elena',
                    status: 'I am happy',
                    location: {city: 'Boston', country: "USA"}
                },
                {
                    id: 4,
                    photoURL: 'https://bit.ly/2PaWiGA',
                    followed: true,
                    fullName: 'John',
                    status: 'Coys!',
                    location: {city: 'Toronto', country: "Canada"}
                },
                {
                    id: 5,
                    photoURL: 'https://bit.ly/2PaWiGA',
                    followed: false,
                    fullName: 'Lisa',
                    status: 'I am a beauty!',
                    location: {city: 'Berlin', country: "Germany"}
                }
            ]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;