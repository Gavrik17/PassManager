import React, { FC } from "react";
import s from "./Body.module.css";
import { Checkbox } from "shared/ui";

interface IBody {
	items: ReadonlyArray<string>
}

const Body: FC<IBody> = ({ items }) => {
	return (
		<tbody>
			{items.map((item) => (
				<tr key={crypto.randomUUID()} className={s.row}>
					<td className={s.select}>
						<Checkbox />
					</td>

					{Object.keys(item).map((value: any) =>
						value !== "id" ? <td key={value}>{item[value]}</td> : null
					)}
				</tr>
			))}
		</tbody>
	);
};

export default Body;
