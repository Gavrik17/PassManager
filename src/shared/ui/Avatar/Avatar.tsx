import React, { FC } from "react";
import style from "./Avatar.module.css";

interface IAvatar {
  img? : any
}

export const Avatar: FC<IAvatar> = ({ img }) => {
	return (
		<div className={style.avatar}>
			<img src={img} alt="" className={style.image} />
		</div>
	);
};
