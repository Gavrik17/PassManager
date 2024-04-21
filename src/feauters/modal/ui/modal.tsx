import React, { FC, useState } from "react";
import style from "./modal.module.css";
import cn from "classnames";

export const useModal = () => {
	const [showModal, setShowModal] = useState(false);
	let openModal = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setShowModal(true);
	};

	let closeModal = (e?: {
		target: HTMLInputElement;
		currentTarget: HTMLInputElement;
	}) => {
		if (e && e.target !== e.currentTarget) return;

		setShowModal(false);
	};

	return { showModal, openModal, closeModal };
};

interface IModal {
	children: React.ReactNode;
	showModal: boolean;
	closeModal: (e: { target: any; currentTarget: HTMLDivElement }) => void;
}

export const Modal: FC<IModal> = ({ children, showModal, closeModal }) => {
	return (
		<div
			className={cn(style.modal, showModal && style.active)}
			onClick={closeModal}
		>
			<div className={cn(style.modalContent, showModal && style.active)}>
				{children}
			</div>
		</div>
	);
};
