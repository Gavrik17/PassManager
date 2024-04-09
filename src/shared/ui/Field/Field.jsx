import React from "react";
import style from "./Field.module.css"


export const Field = ({
	title,
	name,
	handleChange,
	type = "text",
	disabled = false,
	formData,
	error = "",
}) => {
	return (
		<label htmlFor={name} className={style.field}>
			<span>{title}</span>
			<div className={style.block}>
				<input
					value={formData[name]}
					type={type}
					id={name}
					name={name}
					onChange={handleChange}
					disabled={disabled}
				/>
				<span className={style.error}>{error}</span>
			</div>
		</label>
	);
};