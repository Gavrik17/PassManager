import React from "react";
import permitions from "shared/assets/icons/permitions.png";
import style from "./Permition.module.css";
import { Modal, useModal } from "feauters/modal";
import { Group, Users } from "widgets/card";

export const Permition = () => {
		let user = useModal()
		let group = useModal()

	return (
		<div className={style.permitions}>
			<img src={permitions} alt="" className={style.picture} />
			<div className={style.about}>
				<div className={style.title}>Доступ к хранилищу</div>
				<div className={style.access}>
					<span onClick={user.openModal}>10 пользователей</span> и{" "}
					<span onClick={group.openModal}>4 группы</span>
				</div>
			</div>
			
			<Modal
				showModal={user.showModal}
				closeModal={user.closeModal}
			>
				<Users />
			</Modal>
			<Modal
				showModal={group.showModal}
				closeModal={group.closeModal}
			>
				<Group />
			</Modal>
		</div>
	);
};
