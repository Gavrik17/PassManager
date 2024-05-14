import React, { FC } from "react";
import s from "./Title.module.css";
import { Checkbox } from "shared/ui";

const Title: FC = () => {
	return (
		<thead className={s.header}>
			<tr>
				<th className={s.select}>
					<Checkbox />
				</th>
				<th>Наименование</th>
				<th>Логин</th>
				<th>Пароль</th>
				<th>Последнее использование</th>
				<th></th>
				<th></th>
			</tr>
		</thead>
	);
};

export default Title;
