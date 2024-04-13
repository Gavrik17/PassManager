import React from "react";
import css from "./Search.module.css";
import search from "shared/assets/icons/search.svg";

export const Search = ({ handleChange = null }) => {
	return (
		<div className={css.search}>
			<img src={search} alt="" />
			<input type="search" placeholder="Поиск" onChange={handleChange} />
		</div>
	);
};
