import React from "react";
import style from "./Input.module.css"


export const Input = ({ name }) => {
  return (
    <input className={style.input} name={name} />
  )
}