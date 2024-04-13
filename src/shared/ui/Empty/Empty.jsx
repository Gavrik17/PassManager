import React from "react";
import style from "./Empty.module.css"
import sad from "shared/assets/icons/sadface.svg"


export const Empty = () => {
  return (
    <div className={style.empty}>
      <div className={style.title}>Ничего не нашлось</div>
      <img src={sad} alt="" className={style.picture}/>
    </div>
  )
}