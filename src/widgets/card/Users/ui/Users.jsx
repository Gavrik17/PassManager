import React, { useState } from "react";
import { useSelector } from "react-redux";
import { searchFunc, Search } from "feauters/search";
import { Box, Filter, Table } from "shared/ui";

export const Users = () => {
	// @ts-ignore
	let users = useSelector((state) => state.user.users);
	let [user, setUser] = useState(users);

	let changeAction = (event) => {
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
					<Search searchAction={changeAction} />
					<Filter />
				</>
			}
		>
			<Table list={list} />
		</Box>
	);
};
