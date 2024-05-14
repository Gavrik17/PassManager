import React, { FC } from "react";
import style from "./Add.module.css";
import plus from "shared/assets/icons/plus.svg";

interface IAdd {
	onClick: () => void
}

export const Add: FC<IAdd> = ({ onClick }) => {
	return (
		<div className={style.add} onClick={onClick}>
			<img src={plus} alt="" />
		</div>
	);
};
