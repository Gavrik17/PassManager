import React from "react";
import style from "./Field.module.css";
import cn from "classnames";

export const Field = ({
	title,
	name,
	handleChange,
	type = "text",
	disabled = false,
	formData,
	error = null,
}) => {
	return (
		<label htmlFor={name} className={style.field}>
			<span>{title}</span>
			<div className={cn(style.block, error && style.warning)}>
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
