import React from "react";
import s from "./Main.module.css";
import { Box, Select, Add, Del } from "shared/ui";
import { Accounts } from "entites/accounts";
import { Permition } from "widgets/permition";
import { Pagination } from "feauters/pagination";
import { Search } from "feauters/search";
import { useDispatch } from "react-redux";
import { createAccount } from "entites/accounts"

let Action = () => {

	let dispatch = useDispatch()
	let createAcc = () => dispatch(createAccount())

	return (
		<>
			<Search />
			<Add onClick={() => createAcc()}/>
			<Del />
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
