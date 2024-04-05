import React from "react";
import style from "./Avatar.module.css"

export const Avatar = ({ img = null }) => {
    return (
        <div className={style.avatar}>
            <img src={img} alt="" className={style.image} />
        </div>
    )
}