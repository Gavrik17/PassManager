import React from "react";
import s from "./PassSecurity.module.css";
import cn from "classnames";
import { Box } from "shared/ui";
import square from "shared/assets/icons/square.svg";
import shield from "shared/assets/icons/shield.svg";
import lowBar from "shared/assets/icons/lowBar.svg";
import mediumBar from "shared/assets/icons/mediumBar.svg";
import highBar from "shared/assets/icons/highBar.svg";

const InfoBlock = ({
  count,
  label,
  sign,
  green = false,
  yellow = false,
  red = false,
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

export const PassSecurity = () => {
  return (
    <Box title="Безопасность">
      <div className={s.cards}>
        <div className={s.group}>
          <InfoBlock count="47" label="Всего паролей" sign={shield} />
          <InfoBlock count="25" label="Надежные" sign={highBar} green />
        </div>
        <div className={s.group}>
          <InfoBlock count="18" label="Средние" sign={mediumBar} yellow />
          <InfoBlock count="4" label="Не безопасные" sign={lowBar} red />
        </div>
      </div>
    </Box>
  );
};
