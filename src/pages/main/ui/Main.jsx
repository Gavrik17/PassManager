import React from "react";
import s from "./Main.module.css";
import { Box, Select, Add, Del } from "shared/ui";
import { Accounts } from "entites/accounts";
import { Permition } from "widgets/permition";
import { Pagination } from "feauters/pagination";
import { Search } from "feauters/search";
import { Modal, useModal } from "feauters/modal";
import { AddAccount } from "widgets/form";

let Action = () => {
	let account = useModal();

	return (
		<>
			<Search />
			<Add  onClick={account.openModal}/>
			<Del />
			<Modal showModal={account.showModal} closeModal={account.closeModal}>
				<AddAccount />
			</Modal>
		</>
	);
};

const Main = () => {


	return (
		<div className={s.accounts}>
			<Box
				title="Active Directory > Active"
				extension={<Permition />}
				action={<Action />}
				counts={<Select />}
				pagination={<Pagination />}
			>
				<Accounts />
			</Box>
			
		</div>
	);
};

export default Main;
