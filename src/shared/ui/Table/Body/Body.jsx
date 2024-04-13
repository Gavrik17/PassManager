import React from "react";
import s from "./Body.module.css";
import { Checkbox } from "shared/ui";

const Body = ({ items }) => {
	return (
		<tbody>
			{items.map((item) => (
				<tr key={crypto.randomUUID()} className={s.row}>
					<td className={s.select}>
						<Checkbox />
					</td>

					{Object.keys(item).map((value) =>
						value !== "id" ? <td key={value}>{item[value]}</td> : null
					)}
				</tr>
			))}
		</tbody>
	);
};

export default Body;
