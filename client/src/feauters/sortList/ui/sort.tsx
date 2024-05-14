import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { sort } from "entites/group";

interface ISort {
	children: React.ReactNode;
}

export const Sort: FC<ISort> = ({ children }) => {
	const dispatch = useDispatch();
	const sorting = () => {
		dispatch(sort());
	};
	// Не работает именно onclick
	return <span onClick={sorting}>{children}</span>;
};
