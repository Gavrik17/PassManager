import { useEffect, useState } from "react";

interface IContextMenu {
	show: boolean;
	x: number;
	y: number;
}

export const useContextMenu = () => {
	const initialContextMenu: IContextMenu = {
		show: false,
		x: 0,
		y: 0,
	};

	const [ContextMenu, setContextMenu] = useState(initialContextMenu);

	let handleContextMenu = (e: {
		preventDefault: () => void;
		pageX: number;
		pageY: number;
	}) => {
		e.preventDefault();
		setContextMenu({ show: true, x: e.pageX, y: e.pageY });
	};

	let closeContextMenu = () => setContextMenu(initialContextMenu);

	useEffect(() => {
		const handleOutsideClick = () => setContextMenu(initialContextMenu);
		document.addEventListener("click", handleOutsideClick);
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	});

	return {
		ContextMenu,
		handleContextMenu,
		closeContextMenu,
	};
};
