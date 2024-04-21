import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Add, Box, Filter, Table } from "shared/ui";
import { Search, searchFunc } from "feauters/search";
import { AddGroup } from "widgets/form";
import { Modal, useModal } from "feauters/modal";
import { useEffect } from "react";
import { ICard } from "shared/types/types";

export const Group: FC<ICard> = ({ search, filter, add }) => {
	// @ts-ignore

	let groups = useSelector((state) => state.group.group);
	let [group, setGroup] = useState(groups);

	let handleChange = (event?: { target: { value: any; }; }) => {
		let text = event.target.value;
		searchFunc(groups, text, setGroup);
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
					{search && <Search handleChange={handleChange} />}
					{filter && <Filter />}
					{add && <Add onClick={modal.openModal} />}
				</>
			}
		>
			<Table list={list} />
			{add ? (
				<Modal showModal={modal.showModal} closeModal={modal.closeModal}>
					<AddGroup closeModal={modal.closeModal} />
				</Modal>
			) : null}
		</Box>
	);
};