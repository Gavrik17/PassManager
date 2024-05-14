import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroupData } from "shared/types/types";

interface ISearch  {
	text?: any;
};

const groupSlice = createSlice({
	name: "group",
	initialState: {
		group: [
			{ id: 1, name: "Админы", description: "Администратор" },
			{ id: 2, name: "АСО", description: "Архитекторы" },
			{ id: 3, name: "ИТО", description: "-" },
			{ id: 4, name: "Генплан", description: "Генплан и МТО" },
		],
	},
	reducers: {
		sort(state) {
			state.group = state.group.sort((x, y) => x.name.localeCompare(y.name));
		},
		search(state, { payload }: PayloadAction<ISearch>) {
			state.group = state.group.filter((val) =>
				val.name.toLocaleLowerCase().includes(payload.text.toLocaleLowerCase())
			);
		},
		createGroup(state, { payload }: PayloadAction<IGroupData>) {
			state.group.push({
				id: 10,
				name: payload.title!,
				description: payload.description!,
			});
		},
	},
});

export const { sort, search, createGroup } = groupSlice.actions;
export default groupSlice.reducer;
