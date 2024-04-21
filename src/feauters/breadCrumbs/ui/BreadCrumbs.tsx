import React, { FC } from "react"
import style from "./BreadCrumbs.module.css"

export const BreadCrumbs: FC = () => {
    return <div className={style.path}>Active Directory &gt; <span>Active</span></div>
}
