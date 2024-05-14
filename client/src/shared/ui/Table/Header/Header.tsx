import React, { FC } from "react";
import s from "./Header.module.css";
import { Checkbox } from "shared/ui";
import { Sort } from "entites/group";

interface IHeader {
	header: ReadonlyArray<string>;
}

const Header: FC<IHeader> = ({ header }) => {
	return (
		<thead className={s.header}>
			<tr>
				<th className={s.select}>
					<Checkbox />
				</th>
				{header.map((title) =>
					title !== "id" ? (
						<th key={title}>
							<Sort>{title}</Sort>
						</th>
					) : null
				)}
			</tr>
		</thead>
	);
};
export default Header;
