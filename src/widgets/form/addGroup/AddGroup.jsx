import React, { useState } from "react";
import { Box, Submit } from "shared/ui";
import style from "./AddGroup.module.css";
import { useDispatch } from "react-redux";
import { createGroup } from "entites/group";
import { Field } from "shared/ui";

export const AddGroup = ({ closeModal }) => {
	let initData = {
		title: "",
		description: "",
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
			dispatch(createGroup(formData));
			closeModal();
		}
	};

	const validateForm = (data) => {
		let errors = {};
		if (!data.title.trim()) {
			errors.title = "Введите название";
		}

		return errors;
	};

	return (
		<Box title={"Добавление группы"}>
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
				<Submit title="Добавить" />
			</form>
		</Box>
	);
};
