import React, { FC } from "react";
import style from "./Share.module.css";
import share from "shared/assets/icons/share.svg";

export const Share: FC = () => {
	return (
		<div className={style.share} data-title="Поделиться">
			<img src={share} alt="" />
		</div>
	);
};
