import React from "react";
import style from "./Add.module.css";
import plus from "shared/assets/icons/plus.svg";

export const Add = ({ onClick }) => {
	return (
		<div className={style.add} onClick={onClick}>
			<img src={plus} alt="" />
		</div>
	);
};
