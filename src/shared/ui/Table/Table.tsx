import React, { FC } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";

interface ITable {
	list: any;
}

export const Table: FC<ITable> = ({ list }) => {
	return (
		<table>
			<Header header={list.header} />
			<Body items={list.items} />
		</table>
	);
};
