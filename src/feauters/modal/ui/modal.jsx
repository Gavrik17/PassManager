import React, { useState } from "react";
import style from "./modal.module.css";
import cn from "classnames";

export const useModal = () => {
	const [showModal, setShowModal] = useState(false);
	let openModal = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	let closeModal = (e) => {
		if (e && e.target !== e.currentTarget) return;
		
		setShowModal(false);
	};

	return { showModal, openModal, closeModal };
};

export const Modal = ({ children, showModal, closeModal }) => {
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