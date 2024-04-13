import React, { FC } from "react";
import style from "./Save.module.css";
import save from "shared/assets/icons/save.svg";

export const Save: FC = () => {
	return (
		<div className={style.save} data-title="Сохранить">
			<img src={save} alt="" />
		</div>
	);
};
