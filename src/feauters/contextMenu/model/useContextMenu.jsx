import { useEffect, useState } from "react";

export const useContextMenu = () => {
	const initialContextMenu = {
		show: false,
		x: 0,
		y: 0,
	};

	const [ContextMenu, setContextMenu] = useState(initialContextMenu);

	let handleContextMenu = (e) => {
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