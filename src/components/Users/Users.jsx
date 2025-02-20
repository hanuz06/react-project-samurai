import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

let Users = props => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage || styles.numStyle}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {/*<button onClick={this.getUsers}>Get Users</button>*/}
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                //To unfollow we send DELETE request and place withCredentials as a 2nd parameter
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "1e15648d-8188-43cb-9eaf-7e8c8429da01"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0){
                                            props.unfollow(u.id);
                                        }
                                    });
                            }}>Unfollow</button>
                            :  <button onClick={() => {
                                //With POST we set to 'follow' and withCredentials is placed as a 3rd parameter
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "1e15648d-8188-43cb-9eaf-7e8c8429da01"
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode ===0){
                                        props.follow(u.id);
                                    }
                                });

                            }}>Follow</button>
                        }
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