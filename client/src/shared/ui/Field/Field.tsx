import React, { FC } from "react";
import style from "./Field.module.css";
import cn from "classnames";

interface IField {
	title: string;
	name: string;
	handleChange: React.ChangeEventHandler;
	type: React.HTMLInputTypeAttribute;
	disabled: boolean;
	formData: any;
	error?: any;
}

export const Field: FC<IField> = ({
	title,
	name,
	handleChange,
	type = "text",
	disabled = false,
	formData,
	error,
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
