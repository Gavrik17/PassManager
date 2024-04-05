import React from "react";
import Menu from "./Menu/Menu";
import style from "./Storage.module.css";

export const Storage = ({ storage }) => {
	return (
		<div className={style.store}>
			<span className={style.title}>{storage.name}</span>
			<Menu menu={storage.folders} />
		</div>
	);
};
