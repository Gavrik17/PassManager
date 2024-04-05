import { Search } from "feauters/search";
import React from "react";
import { Box, Filter, Table } from "shared/ui";

export const Storage = () => {
	const list = {
		id: 3,
		title: "Хранилища",
		header: ["id", "Хранилище", "Пароли", "Участники"],
		items: [
			{
				id: 1,
				name: "Личное хранилище",
				description: "32 пароля",
				members: "120",
			},
			{
				id: 2,
				name: "Хранилище организации",
				description: "13 паролей",
				members: "17",
			},
		],
	};

	return (
		<Box
			title={list.title}
			action={
				<>
					<Search />
					<Filter />
				</>
			}
		>
			<Table list={list} />
		</Box>
	);
};
