import React from "react";
import style from "./Select.module.css"

export const Select = () => {

    const values = ["10", "25", "50", "100", "500", "1000"]

    return (
        <>
            <select name="select" className={style.select}>
                {values.map(value => <option value={value}>{value}</option>)}
            </select>
            <span className={style.rows}>Строк</span>
        </>

    )
}