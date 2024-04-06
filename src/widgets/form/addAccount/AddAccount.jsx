import React, { useState } from "react";
import { Box } from "shared/ui";
import style from "./AddAccount.module.css";
import { useDispatch } from "react-redux";
import { createAccount } from "entites/accounts";
import { Field } from "shared/ui";

// @ts-ignore
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

export const AddAccount = () => {
	let initData = {
		title: "",
		description: "",
		login: "",
		password: "",
		link: "",
		dateCreate: "",
		dateChange: "",
	};

	const [errors, setErrors] = useState(initData);
	const [formData, setFormData] = useState(initData);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newErrors = validateForm(formData);
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			dispatch(createAccount(formData));
		}
	};

	const validateForm = (data) => {
		let errors = {};
		if (!data.title.trim()) {
			errors.title = "Введите название";
		}

		if (!data.login.trim()) {
			errors.login = "Поле Логин не может быть пустым";
		}

		if (!data.password.trim()) {
			errors.password = "Поле Пароль не может быть пустым";
		}

		return errors;
	};

	return (
		<Box title={"Создание нового поста"}>
			<form onSubmit={handleSubmit} className={style.form}>
				<Field
					title="Название"
					name="title"
					handleChange={handleChange}
					formData={formData}
					error={errors.title}
				/>
				<Field
					title="Описание"
					name="description"
					handleChange={handleChange}
					formData={formData}
					error={errors.description}
				/>
				<Field
					title="Логин"
					name="login"
					handleChange={handleChange}
					formData={formData}
					error={errors.login}
				/>
				<Field
					title="Пароль"
					name="password"
					type="password"
					handleChange={handleChange}
					formData={formData}
					error={errors.password}
				/>
				<Field
					title="Ссылка на сайт"
					name="link"
					handleChange={handleChange}
					formData={formData}
					error={errors.link}
				/>
				<button type="submit" className={style.submit}>
					Добавить
				</button>
			</form>
		</Box>
	);
};
