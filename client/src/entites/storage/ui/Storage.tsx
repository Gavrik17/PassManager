import React, { FC } from "react";
import Menu from "./Menu/Menu";
import style from "./Storage.module.css";

interface IStorage {
	storage: {
		name: string,
		folders: any
	}
}
export const Storage: FC<IStorage> = ({ storage }) => {
	return (
		<div className={style.store}>
			<span className={style.title}>{storage.name}</span>
			<Menu menu={storage.folders} />
		</div>
	);
};
