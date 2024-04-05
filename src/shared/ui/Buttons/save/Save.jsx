import React from "react";
import style from "./Save.module.css";
import save from "shared/assets/icons/save.svg";

export const Save = () => {
	return (
		<div className={style.save} data-title="Сохранить">
			<img src={save} alt="" />
		</div>
	);
};
