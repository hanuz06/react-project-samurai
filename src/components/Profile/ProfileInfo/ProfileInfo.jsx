import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
            </div>
            <h3 style={{color: 'orange'}}>{props.profile.aboutMe}</h3>
            <h3> My site: {props.profile.contacts.vk}</h3>
        </div>
    )
};

export default ProfileInfo;