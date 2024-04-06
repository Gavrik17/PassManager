import React from "react";
import Title from "./Title/Title";
import Item from "./Row/Row";
import { useSelector } from "react-redux";
const Body = ({ accounts }) => {
	return (
		<tbody>
			{accounts.map((account) => (
				<Item key={account.id} account={account} />
			))}
		</tbody>
	);
};

export const Accounts = () => {
	// @ts-ignore
	let accounts = useSelector((state) => state.accounts.accounts);

	return (
		<>
			<table >
				<Title />
				<Body accounts={accounts} />
			</table>
		</>
	);
};
