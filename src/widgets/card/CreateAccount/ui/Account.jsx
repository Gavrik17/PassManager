import React, { useState } from "react";
import { Box, Del, Save } from "shared/ui";
import style from "./Account.module.css";
import { Share } from "shared/ui/Buttons/share/Share";

const ColorBlocks = () => {
	let colors = [
		"#FFFF00",
		"#FF9900",
		"#FF0000",
		"#FF0066",
		"#FF0099",
		"#FF33FF",
		"#3300FF",
		"#0099FF",
		"#33FFCC",
		"#33FF66",
		"#33FF00",
		"#CCFF33",
	];

	return (
		<div className={style.colorBlocks}>
			{colors.map((color) => (
				<div
					className={style.colorBlock}
					style={{ backgroundColor: `${color}` }}
				></div>
			))}
		</div>
	);
};

const Input = ({
	title,
	name,
	handleChange,
	type = "text",
	disabled = false,
	formData,
}) => {
	return (
		<label htmlFor={name}>
			{title}
			<input
				className={style.input}
				value={formData[name]}
				type={type}
				id={name}
				name={name}
				onChange={handleChange}
				disabled={disabled}
			/>
		</label>
	);
};

export const CreateAccount = () => {
	const [formData, setFormData] = useState({
		title: "",
		login: "",
		password: "",
		link: "",
		dateCreate: "",
		dateChange: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(formData.link);
	};

	return (
		<Box title={"Вконтакте"}>
			<form onSubmit={handleSubmit} className={style.account}>
				<Input
					title="Название"
					name="title"
					handleChange={handleChange}
					formData={formData}
				/>
				<Input
					title="Логин"
					name="login"
					handleChange={handleChange}
					formData={formData}
				/>
				<Input
					title="Пароль"
					name="password"
					type="password"
					handleChange={handleChange}
					formData={formData}
				/>
				<Input
					title="Ссылка на сайт"
					name="link"
					handleChange={handleChange}
					formData={formData}
				/>
				<Input
					title="Дата создания"
					name="dateCreate"
					handleChange={handleChange}
					type="date"
					formData={formData}
				/>
				<Input
					title="Дата изменения"
					name="dateChange"
					handleChange={handleChange}
					type="date"
					formData={formData}
				/>
				<button type="submit">Жми</button>
			</form>
		</Box>
	);
};
