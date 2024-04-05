import React from "react";
import css from "./Filter.module.css"
import filter from "../../assets/icons/filter.svg"


export const Filter = () => {
    return (
        <div className={css.filter}>
            <img src={filter} alt="" />
            Фильтр
        </div>
    )
}