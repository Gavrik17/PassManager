import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";

export const Table = ({ list }) => {
	return (
		<table>
			<Header header={list.header} />
			<Body items={list.items} />
		</table>
	);
};
