import React from "react";
import style from "./Box.module.css";

export const Box = ({
	children,
	action = null,
	title = null,
	extension = null,
	counts = null,
	pagination = null,
}) => {
	return (
		<div className={style.card}>
			<div className={style.header}>
				<div className={style.leftblock}>
					<div className={style.title}>{title}</div>
					{extension ? <div className={style.extension}>{extension}</div> : ""}
				</div>
				<div className={style.action}>{action}</div>
			</div>

			<div className={style.body}>{children}</div>
			<div className={style.footer}>
				<div className={style.counts}>{counts}</div>
				<div className={style.pagination}>{pagination}</div>
			</div>
		</div>
	);
};
