import React, { FC } from "react";
import s from "./PassSecurity.module.css";
import cn from "classnames";
import { Box } from "shared/ui";
import square from "shared/assets/icons/square.svg";
import shield from "shared/assets/icons/shield.svg";
import lowBar from "shared/assets/icons/lowBar.svg";
import mediumBar from "shared/assets/icons/mediumBar.svg";
import highBar from "shared/assets/icons/highBar.svg";

interface IInfoBlock {
	count: number;
	label: string;
	sign: any;
	green?: boolean;
	yellow?: boolean;
	red?: boolean;
}

const InfoBlock: FC<IInfoBlock> = ({
	count,
	label,
	sign,
	green,
	yellow,
	red,
}) => {
	return (
		<div
			className={cn(
				s.block,
				green ? s.green : undefined,
				yellow ? s.yellow : undefined,
				red ? s.red : undefined
			)}
		>
			<div className={s.data}>
				<img src={sign} className={s.sign} alt="" />
				<div className={s.info}>
					<div className={s.count}>{count}</div>
					<div className={s.label}>{label}</div>
				</div>
			</div>
			<img src={square} className={s.figure} alt="" />
		</div>
	);
};

export const PassSecurity: FC = () => {
  let count: Array<number> = [47, 25, 18, 4]
	return (
		<Box title="Безопасность">
			<div className={s.cards}>
				<div className={s.group}>
					<InfoBlock count={count[0]} label="Всего паролей" sign={shield} />
					<InfoBlock count={count[1]} label="Надежные" sign={highBar} green />
				</div>
				<div className={s.group}>
					<InfoBlock count={count[2]} label="Средние" sign={mediumBar} yellow />
					<InfoBlock count={count[3]} label="Не безопасные" sign={lowBar} red />
				</div>
			</div>
		</Box>
	);
};
