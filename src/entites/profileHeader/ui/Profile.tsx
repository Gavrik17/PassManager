import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "./Profile.module.css";
import avatar from "shared/assets/icons/avatar.png";
import { Avatar } from "shared/ui";
import { useSelector } from "react-redux";


const Profile: FC = () => {
    // @ts-ignore
    let user = useSelector(state => state.user.user)

    return (
        <div className={style.profile}>
            <NavLink to="/profile" className={style.avatar}>
                <Avatar img={avatar} />
            </NavLink>
            <div className={style.info}>
                <div className={style.name}>{user.name}</div>
                <div className={style.role}>Администратор</div>
            </div>
        </div>
    );
};

export default Profile;
