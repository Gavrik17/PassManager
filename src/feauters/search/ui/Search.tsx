import React, { FC } from "react";
import css from "./Search.module.css";
import search from "shared/assets/icons/search.svg";

interface ISearch {
	handleChange?: () => void
}

export const Search: FC<ISearch> = ({ handleChange }) => {
	return (
		<div className={css.search}>
			<img src={search} alt="" />
			<input type="search" placeholder="Поиск" onChange={handleChange} />
		</div>
	);
};
