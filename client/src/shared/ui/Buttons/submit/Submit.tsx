import React, { FC } from "react";
import style from "./Submit.module.css";

interface ISubmit {
	title: string;
}

export const Submit: FC<ISubmit> = ({ title }) => {
	return (
		<button type="submit" className={style.submit}>
			{title}
		</button>
	);
};
