import React from "react";
import style from "./Submit.module.css";

export const Submit = ({ title }) => {
	return (
		<button type="submit" className={style.submit}>
			{title}
		</button>
	);
};
