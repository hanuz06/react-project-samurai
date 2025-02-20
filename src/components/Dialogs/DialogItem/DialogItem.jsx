import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.item}>
        <NavLink to={path}> <img className={s.avatarImg} src={props.img} alt="avatar" activeClassName={s.activeLink}/> {props.name}</NavLink>
    </div>
}

export default DialogItem;