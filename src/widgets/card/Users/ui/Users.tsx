import React, { FC, useState } from "react";
import { searchFunc, Search } from "feauters/search";
import { Box, Filter, Table, Add, Empty } from "shared/ui";
import { ICard } from "shared/types/types";
import { useAppSelector } from "app/appStore";

interface Ilist {
	title: string;
	header: ReadonlyArray<string>;
	items: any;
}

export const Users: FC<ICard> = ({ search, filter, add }) => {
	let users = useAppSelector((state) => state.user.users);
	let [user, setUser] = useState(users);

	let handleChange = (event?: { target: { value: string } }) => {
		if (event) {
			let text = event.target.value;
			searchFunc(users, text, setUser);
		}
	};

	const list: Ilist = {
		title: "Все пользователи",
		header: ["id", "Пользователи", "Доступ"],
		items: [...user],
	};

	return (
		<Box
			title={list.title}
			action={
				<>
					{search && <Search handleChange={handleChange} />}
					{filter && <Filter />}
					{add && <Add onClick={undefined} />}
				</>
			}
		>
			{list.items.length ? <Table list={list} /> : <Empty />}
		</Box>
	);
};
