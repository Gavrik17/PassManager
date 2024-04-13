import React, { useState } from "react";
import { useSelector } from "react-redux";
import { search } from "feauters/search/model/search";
import { Add, Box, Filter, Table } from "shared/ui";
import { Search } from "feauters/search";
import { AddGroup } from "widgets/form";
import { Modal, useModal } from "feauters/modal";
import { useEffect } from "react";

export const Group = () => {
	// @ts-ignore

	let groups = useSelector((state) => state.group.group);
	let [group, setGroup] = useState(groups);

	let handleChange = (event) => {
		let text = event.target.value;
		search(groups, text, setGroup);
	};

	useEffect(() => {
		setGroup(groups);
	}, [groups]);

	const list = {
		title: "Ролевые группы",
		header: ["id", "Роли", "Комментарий"],
		items: [...group],
	};

	let modal = useModal();

	return (
		<Box
			title={list.title}
			action={
				<>
					<Search handleChange={handleChange} />
					<Filter />
					<Add onClick={modal.openModal} />
				</>
			}
		>
			<Table list={list} />
			<Modal showModal={modal.showModal} closeModal={modal.closeModal}>
				<AddGroup closeModal={modal.closeModal} />
			</Modal>
		</Box>
	);
};
