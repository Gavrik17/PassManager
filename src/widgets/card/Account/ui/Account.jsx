import React from "react";
import { Box, Del, Save } from "shared/ui";
import style from "./Account.module.css";
import { Share } from "shared/ui/Buttons/share/Share";

const ColorBlocks = () => {
	let colors = [
		"#FFFF00",
		"#FF9900",
		"#FF0000",
		"#FF0066",
		"#FF0099",
		"#FF33FF",
		"#3300FF",
		"#0099FF",
		"#33FFCC",
		"#33FF66",
		"#33FF00",
		"#CCFF33",
	];

	return (
		<div className={style.colorBlocks}>
			{colors.map((color) => (
				<div
					className={style.colorBlock}
					style={{ backgroundColor: `${color}` }}
				></div>
			))}
		</div>
	);
};

export const Account = () => {
	return (
		<Box title={"Вконтакте"}>
			<div className={style.account}>
				<div className={style.block}>
					<div className={style.title}>Название</div>
					<div className={style.data}>Вконтакте</div>
				</div>
				<div className={style.block}>
					<div className={style.title}>Логин</div>
					<div className={style.data}>Fufik</div>
				</div>
				<div className={style.block}>
					<div className={style.title}>Пароль</div>
					<div className={style.data}>jksdhfgjksdf</div>
				</div>
				<div className={style.block}>
					<div className={style.title}>Ссылка на сайт</div>
					<div className={style.data}>vk.com</div>
				</div>
				<div className={style.block}>
					<div className={style.title}>Дата создания</div>
					<div className={style.data}>23.01.2024</div>
				</div>
				<div className={style.block}>
					<div className={style.title}>Последнее изменение</div>
					<div className={style.data}>27.03.2024</div>
				</div>
				<div className={style.block}>
					<div className={style.title}>Цвет</div>
					<div className={style.data}>
						<ColorBlocks />
					</div>
				</div>
				<div className={style.buttons}>
					<div className={style.buttonsLeft}>
						<Save />
						<Share />
					</div>

					<Del />
				</div>
			</div>
		</Box>
	);
};
