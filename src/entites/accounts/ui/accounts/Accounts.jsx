import React from "react";
import Title from "./Title/Title";
import Item from "./Row/Row";
import { useSelector } from "react-redux";
import { Modal, useModal } from "feauters/modal";
import { CreateAccount } from "widgets/card";

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
	let account = useModal();

	return (
		<>
			<table onClick={account.openModal}>
				<Title />
				<Body accounts={accounts} />
			</table>
			<Modal showModal={account.showModal} closeModal={account.closeModal}>
				<CreateAccount />
			</Modal>
		</>
	);
};
