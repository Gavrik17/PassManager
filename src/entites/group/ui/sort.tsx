import React, { FC } from "react";
import { sort } from "entites/group";
import { useAppDispatch } from "app/appStore";

interface ISort {
	children: React.ReactNode;
}

export const Sort: FC<ISort> = ({ children }) => {
	const dispatch = useAppDispatch();
	const sorting = () => {
		dispatch(sort());
	};

	return <span onClick={sorting}>{children}</span>;
};
