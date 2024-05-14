import { createSlice } from "@reduxjs/toolkit";

const storageSlice = createSlice({
	name: "storage",
	initialState: {
		storage: [
			{
				id: 100,
				name: "Личное хранилище",
				folders: [
					{
						id: 1,
						name: "Сайты",
						fields: [
							{
								id: 2,
								name: "Отечественные",
								fields: [
									{ id: 3, name: "Соцсети" },
									{ id: 4, name: "Видеохостинги" },
									{ id: 5, name: "Банки" },
									{ id: 6, name: "Форумы" },
								],
							},
							{ id: 7, name: "ММО" },
						],
					},
					{
						id: 8,
						name: "Email",
						fields: [
							{
								id: 9,
								name: "Google",
								fields: [{ id: 39, name: "sdf" }],
							},
							{ id: 10, name: "Yandex" },
						],
					},
				],
			},
			{
				id: 100,
				name: "Хранилище организации",
				folders: [
					{
						id: 1,
						name: "Active Directory",
						fields: [
							{
								id: 2,
								name: "Active",
								fields: [
									{ id: 3, name: "Top" },
									{ id: 4, name: "IT" },
									{ id: 5, name: "BIM" },
									{ id: 6, name: "ASO" },
								],
							},
							{ id: 7, name: "Disabled" },
						],
					},
					{
						id: 8,
						name: "Email",
						fields: [
							{
								id: 9,
								name: "Google",
								fields: [{ id: 39, name: "sdf" }],
							},
							{ id: 10, name: "Yandex" },
						],
					},
				],
			},
		],
	},
	reducers: {
		addStorage(state, action) {
			state.storage.push({
				id: 1030,
				name: "Новый стор",
				folders: [],
			});
		}
	},
});

export const { addStorage } = storageSlice.actions;
export default storageSlice.reducer;
