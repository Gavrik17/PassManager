import React from "react";
import css from "./Checkbox.module.css"


export const Checkbox = () => {
    return (
        <label className={css.checkbox}>
            <input type="checkbox"/>
            <div className={css.checkmark}></div>
        </label>
    )
}