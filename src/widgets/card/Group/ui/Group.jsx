import React, { useState } from "react";
import { useSelector } from "react-redux";
import { search } from "feauters/search/model/search";
import { Add, Box, Filter, Table } from "shared/ui";
import { Search } from "feauters/search";
import { AddGroup } from "widgets/form";
import { Modal, useModal } from "feauters/modal";

export const Group = () => {
	// @ts-ignore
	let groups = useSelector((state) => state.group.group);

	let [group, setGroup] = useState(groups);

	let changeAction = (event) => {
		let text = event.target.value;
		search(groups, text, setGroup);
	};

	const list = {
		title: "Ролевые группы",
		header: ["id", "Роли", "Комментарий"],
		items: [...group],
	};

	let entity = useModal();

	return (
		<Box
			title={list.title}
			action={
				<>
					<Search searchAction={changeAction} />
					<Filter />
					<Add onClick={entity.openModal}/>
				</>
			}
		>
			<Table list={list} />
			<Modal showModal={entity.showModal} closeModal={entity.closeModal}>
				<AddGroup closeModal={entity.closeModal}/>
			</Modal>
		</Box>
	);
};
