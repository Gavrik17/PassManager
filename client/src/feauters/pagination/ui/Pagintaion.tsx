import React, { FC } from "react";
import style from "./Pagination.module.css"

export const Pagination: FC = () => {
    return (
        <div className={style.pagination}> {"<"} 1 2 3 4 5 6 {">"}</div>
    )
}