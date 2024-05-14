import React, { FC } from "react";
import style from "./Select.module.css";

export const Select: FC = () => {
	const values: ReadonlyArray<number> = [10, 20, 50, 100, 500, 1000];

	return (
		<>
			<select name="select" className={style.select}>
				{values.map((value) => (
					<option key={value} value={value}>{value}</option>
				))}
			</select>
			<span className={style.rows}>Строк</span>
		</>
	);
};
