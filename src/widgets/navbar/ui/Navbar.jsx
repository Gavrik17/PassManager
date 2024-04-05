import React, { useState } from "react";
import style from "./Navbar.module.css";
import logout from "shared/assets/icons/logout.svg";
import { NavLink } from "react-router-dom";
import { ProfileHeader } from "entites/profileHeader";
import { Storage } from "entites/storage";
import { useSelector } from "react-redux";
import { ContextMenuUI } from "feauters/contextMenu";
import { useContextMenu } from "feauters/contextMenu";
const Storages = () => {
	// @ts-ignore
	const storages = useSelector((state) => state.storage.storage);

	return storages.map((storage) => {
		return <Storage storage={storage} />;
	});
};

const Navbar = () => {
	const { ContextMenu, handleContextMenu, closeContextMenu } = useContextMenu();

	return (
		<aside className={style.navbar} onContextMenu={handleContextMenu}>
			<div >
				<ProfileHeader />
				<div className={style.navigation}>
					<nav>
						{ContextMenu.show && (
							<ContextMenuUI
								x={ContextMenu.x}
								y={ContextMenu.y}
								closeContextMenu={closeContextMenu}
							/>
						)}

						<Storages />
					</nav>
				</div>
			</div>

			<NavLink to="#" className={style.logout}>
				<img src={logout} alt="" />
				<span>Выйти</span>
			</NavLink>
		</aside>
	);
};

export default Navbar;
