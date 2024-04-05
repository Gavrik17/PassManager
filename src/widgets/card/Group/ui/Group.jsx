import React, { useState } from "react";
import { useSelector } from "react-redux";
import { search } from "feauters/search/model/search";
import { Box, Filter, Table } from "shared/ui";
import { Search } from "feauters/search";

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
