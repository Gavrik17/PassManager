import React from "react";
import s from "./Profile.module.css";
import { PassSecurity } from "widgets/passSecurity";
import { Users, Storage, Group } from "widgets/card";

const Profile = () => {
	return (
		<>
			<div className={s.profile}>
				<PassSecurity />
				<Users search filter/>
				<Group search filter add/>
				<Storage search filter add/>
			</div>
		</>
	);
};

export default Profile;
