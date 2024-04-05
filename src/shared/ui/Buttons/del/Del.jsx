import React from "react";
import style from "./Del.module.css";
import trash from "shared/assets/icons/trash.svg";

export const Del = () => {
    return (
        <div className={style.del} data-title="Удалить">
            <img src={trash} alt="" />
        </div>
    );
};
