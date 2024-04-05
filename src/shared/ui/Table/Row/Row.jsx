import React from "react";
import s from "./Row.module.css";
import { Checkbox } from "shared/ui";

const Row = ({ item }) => {
  return (
    <tr key={item.id} className={s.row}>
      <td className={s.select}>
        <Checkbox />
      </td>

      {Object.keys(item).map((value) =>
        value !== "id" ? <td>{item[value]}</td> : null
      )}
    </tr>
  );
};

export default Row;
