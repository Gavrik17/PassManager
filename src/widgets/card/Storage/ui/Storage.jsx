import { Search } from "feauters/search";
import React from "react";
import { Box, Filter, Table, Add } from "shared/ui";

export const Storage = ({ search = null, filter = null, add = null }) => {
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
					{search && <Search />}
					{filter && <Filter />}
					{add && <Add onClick={undefined} />}
				</>
			}
		>
			<Table list={list} />
		</Box>
	);
};
