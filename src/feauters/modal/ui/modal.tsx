import React, { FC, useEffect, useState } from "react";
import style from "./modal.module.css";
import cn from "classnames";
import { Portal } from "feauters/portal";

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
	closeModal: (e: { target: any; currentTarget: any }) => void;
}

export const Modal: FC<IModal> = ({ children, showModal, closeModal }) => {
	let [active, setActive] = useState(false);

	useEffect(() => {
		setActive(showModal);
	}, [showModal]);

	return (
		<Portal active={active}>
			<div
				className={cn(style.modal, showModal && style.active)}
				onClick={closeModal}
			>
				<div className={cn(style.modalContent, showModal && style.active)}>
					{children}
				</div>
			</div>
		</Portal>
	);
};
