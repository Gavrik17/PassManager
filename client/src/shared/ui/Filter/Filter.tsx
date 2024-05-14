import React, { FC } from "react";
import css from "./Filter.module.css"
import filter from "../../assets/icons/filter.svg"


export const Filter: FC = () => {
    return (
        <div className={css.filter}>
            <img src={filter} alt="" />
            Фильтр
        </div>
    )
}