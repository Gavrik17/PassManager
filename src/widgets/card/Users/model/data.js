import { useState } from "react";
import { useSelector } from "react-redux";

// @ts-ignore
let groups = useSelector((state) => state.group.group);
export let [group, setGroup] = useState(groups);

export const list = {
  title: "Ролевые группы",
  header: ["id", "Роли", "Комментарий"],
  items: [...group],
}