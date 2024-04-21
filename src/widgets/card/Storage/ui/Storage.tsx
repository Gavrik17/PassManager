import { Search } from "feauters/search";
import React, { FC } from "react";
import { Box, Filter, Table, Add } from "shared/ui";
import { ICard } from "shared/types/types";

interface Ilist {
	id: number;
	title: string;
	header: ReadonlyArray<string>;
	items: any;
}

export const Storage: FC<ICard> = ({ search, filter, add }) => {
	const list: Ilist = {
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
					{add && <Add />}
				</>
			}
		>
			<Table list={list} />
		</Box>
	);
};
