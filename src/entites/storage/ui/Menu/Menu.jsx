import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";
import downarrow from "shared/assets/icons/downarrow.svg";

const Menu = (props) => {
	const [isOpen, setIsOpen] = useState([
		...Array(props.menu.length)
			.fill(0)
			.map((x) => false),
	]);

	const open = (index) => {
		let isOpenChanger = [...isOpen];
		isOpenChanger[index] = !isOpen[index];
		setIsOpen(isOpenChanger);
	};

	const isFolder = (el) => {
		return el.hasOwnProperty("fields");
	};

	return props.menu.map((el, index) => {
		return (
			<div
				key={el.id}
				className={`${style.line} ${isFolder(el) ? style.folder : style.item} ${
					isOpen[index] && isFolder(el) ? style.open : ""
				}`}
			>
				<div className={style.name}>
					<NavLink to="/">{el.name}</NavLink>
					{isFolder(el) ? (
						<div
							className={style.actions}
							onClick={() => {
								open(index);
							}}
						>
							<img src={downarrow} alt="" />
						</div>
					) : null}
				</div>

				{isFolder(el) && <Menu menu={el.fields} />}
			</div>
		);
	});
};

export default Menu;
