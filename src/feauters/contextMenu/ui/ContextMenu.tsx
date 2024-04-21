import React, { FC } from "react";
import style from "./ContextMenu.module.css";

interface IContexMenuUI {
	x: number,
	y: number,
	closeContextMenu: () => void
}

export const ContextMenuUI: FC<IContexMenuUI> = ({ x, y, closeContextMenu }) => {
	return (
		<div
			onClick={closeContextMenu}
			className={style.contextMenu}
			style={{ top: `${y}px`, left: `${x}px` }}
		>
			<div className={style.block}>Переименовать</div>
			<div className={style.block}>Удалить</div>
			<div className={style.block}>Добавить страницу</div>
		</div>
	);
};
