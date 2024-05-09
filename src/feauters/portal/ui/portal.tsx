import React, { FC } from "react";
import { createPortal } from "react-dom";

function isExist() {
	return document.getElementById("portal") ? true : false;
}

function createContainer() {
	let container: Element | null = document.createElement("div");
	container.setAttribute("id", "portal");
	document.body.appendChild(container);
}

function deleteContainer() {
	let container: Element | null = document.getElementById("portal");
	container && document.body.removeChild(container);
}

interface IPortal {
	children: React.ReactNode;
	active: boolean;
}

export const Portal: FC<IPortal> = ({ children, active }) => {
	if (active) {
		!isExist() && createContainer();
		let container: Element | null = document.getElementById("portal");
		return createPortal(children, container!);
	}

	deleteContainer();
	return null;
};
