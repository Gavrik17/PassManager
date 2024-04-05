import React from "react";
import style from "./ContextMenu.module.css";

export const ContextMenuUI = ({ x, y, closeContextMenu }) => {
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
