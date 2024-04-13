import React, { FC } from "react";
import style from "./Box.module.css";

interface IBox {
	action?: React.ReactNode;
	title?: string;
	extension?: React.ReactNode;
	counts?: React.ReactNode;
	pagination?: React.ReactNode;
	children: React.ReactNode;
}

export const Box: FC<IBox> = ({
	action,
	title,
	extension,
	counts,
	pagination,
	children,
}) => {
	return (
		<div className={style.card}>
			<div className={style.header}>
				<div className={style.leftblock}>
					<div className={style.title}>{title}</div>
					{extension && <div className={style.extension}>{extension}</div>}
				</div>
				{action && <div className={style.action}>{action}</div>}
			</div>

			<div className={style.body}>{children}</div>
			{(counts || pagination) && (
				<div className={style.footer}>
					<div className={style.counts}>{counts}</div>
					<div className={style.pagination}>{pagination}</div>
				</div>
			)}
		</div>
	);
};
