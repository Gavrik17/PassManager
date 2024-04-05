import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
	name: "group",
	initialState: {
		group: [
			{ id: 1, name: "Админы", description: "Администратор" },
			{ id: 2, name: "АСО", description: "Архитекторы" },
			{ id: 3, name: "ИТО", description: "-" },
			{ id: 4, name: "Генплан", description: "Генплан и МТО" },
		]
	},
	reducers: {
		sort(state, action) {
			state.group = state.group.sort((x, y) => x.name.localeCompare(y.name));
		},
		search(state, action) {
			state.group = state.group.filter((val) => val.name.toLocaleLowerCase().includes(action.payload.text.toLocaleLowerCase()))
		}
	},
});

export const { sort, search } = groupSlice.actions;
export default groupSlice.reducer;
 