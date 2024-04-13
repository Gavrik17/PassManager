import React, { useState } from "react";
import { useSelector } from "react-redux";
import { searchFunc, Search } from "feauters/search";
import { Box, Filter, Table } from "shared/ui";
import { Empty } from "shared/ui/Empty/Empty";

export const Users = () => {
	// @ts-ignore
	let users = useSelector((state) => state.user.users);
	let [user, setUser] = useState(users);

	let handleChange = (event) => {
		let text = event.target.value;
		searchFunc(users, text, setUser);
	};

	const list = {
		title: "Все пользователи",
		header: ["id", "Пользователи", "Доступ"],
		items: [...user],
	};

	return (
		<Box
			title={list.title}
			action={
				<>
					<Search handleChange={handleChange} />
					<Filter />
				</>
			}
		>
			{list.items.length ? <Table list={list} />: <Empty />}
			
		</Box>
	);
};
