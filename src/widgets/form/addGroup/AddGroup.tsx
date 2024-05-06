import React, { useState } from "react";
import { Box, Submit } from "shared/ui";
import style from "./AddGroup.module.css";
import { useDispatch } from "react-redux";
import { createGroup } from "entites/group";
import { Field } from "shared/ui";
import { IGroupData } from "shared/types/types";

interface IAddGroup {
	closeModal: any;
}

export const AddGroup = ({ closeModal }: IAddGroup) => {
	let initData: IGroupData = {
		title: "",
		description: "",
	};

	let initErrors: Partial<IGroupData> = {};

	const [errors, setErrors] = useState(initErrors);
	const [formData, setFormData] = useState(initData);
	const dispatch = useDispatch();

	const handleChange = (event: { target: { name: string; value: string } }) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		let newErrors: Partial<IGroupData> = validateForm(formData);
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			dispatch(createGroup(formData));
			setFormData(initData);
			closeModal();
		}
	};

	const validateForm = (data: IGroupData) => {
		let errors: Partial<IGroupData> = {};
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
