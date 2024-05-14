import React, { FC } from "react";
import Title from "./Title/Title";
import Item from "./Row/Row";
import { useSelector } from "react-redux";

interface IBody {
	accounts: any;
}

const Body: FC<IBody> = ({ accounts }) => {
	return (
		<tbody>
			{accounts.map((account: any) => (
				<Item key={account.id} account={account} />
			))}
		</tbody>
	);
};

export const Accounts: FC = () => {
	// @ts-ignore
	let accounts = useSelector((state) => state.accounts.accounts);

	return (
		<>
			<table>
				<Title />
				<Body accounts={accounts} />
			</table>
		</>
	);
};
