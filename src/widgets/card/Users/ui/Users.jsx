import React, { useState } from "react";
import { useSelector } from "react-redux";
import { searchFunc, Search } from "feauters/search";
import { Box, Filter, Table, Add, Empty } from "shared/ui";

export const Users = ({ search = null, filter = null, add = null }) => {
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
					{search && <Search handleChange={handleChange} />}
					{filter && <Filter />}
					{add && <Add onClick={undefined} />}
				</>
			}
		>
			{list.items.length ? <Table list={list} />: <Empty />}
			
		</Box>
	);
};
