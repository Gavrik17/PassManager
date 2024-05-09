import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccountData } from "shared/types/types";

const accountSlice = createSlice({
	name: "accounts",
	initialState: {
		accounts: [
			{
				id: 1,
				name: "vk.com",
				description: "Social",
				login: "Fufuk",
				password: "sdfsdfsdfsdf",
				lastused: "1 час назад",
				color: "#2A47E6",
			},
			{
				id: 2,
				name: "facebook.com",
				description: "Social web",
				login: "poiesd",
				password: "456456",
				lastused: "11 часов назад",
				color: "#2A47E6",
			},
			{
				id: 3,
				name: "youtube.com",
				description: "Video hosting",
				login: "cvbfuk",
				password: "9vbdfy34",
				lastused: "Только что",
				color: "#2A47E6",
			},
			{
				id: 4,
				name: "vk.com",
				description: "Social",
				login: "Fufuk",
				password: "sdfsdfsdfsdf",
				lastused: "1 час назад",
				color: "#2A47E6",
			},
			{
				id: 5,
				name: "facebook.com",
				description: "Social web",
				login: "poiesd",
				password: "456456",
				lastused: "11 часов назад",
				color: "#2A47E6",
			},
			{
				id: 6,
				name: "youtube.com",
				description: "Video hosting",
				login: "cvbfuk",
				password: "9vbdfy34",
				lastused: "Только что",
				color: "#2A47E6",
			},
			{
				id: 7,
				name: "vk.com",
				description: "Social",
				login: "Fufuk",
				password: "sdfsdfsdfsdf",
				lastused: "1 час назад",
				color: "#2A47E6",
			},
			{
				id: 8,
				name: "facebook.com",
				description: "Social web",
				login: "poiesd",
				password: "456456",
				lastused: "11 часов назад",
				color: "#2A47E6",
			},
			{
				id: 9,
				name: "youtube.com",
				description: "Video hosting",
				login: "cvbfuk",
				password: "9vbdfy34",
				lastused: "Только что",
				color: "#2A47E6",
			},
			{
				id: 10,
				name: "vk.com",
				description: "Social",
				login: "Fufuk",
				password: "sdfsdfsdfsdf",
				lastused: "1 час назад",
				color: "#2A47E6",
			},
			{
				id: 11,
				name: "facebook.com",
				description: "Social web",
				login: "poiesd",
				password: "456456",
				lastused: "11 часов назад",
				color: "#345",
			},
		],
	},
	reducers: {
		createAccount(state, { payload }: PayloadAction<IAccountData>) {
			let date = Date();
			state.accounts.push({
				id: 1000,
				name: payload.title,
				description: payload.description,
				login: payload.login,
				password: payload.password,
				lastused: date,
				color: payload.color,
			});
		},
	},
});

export const { createAccount } = accountSlice.actions;
export default accountSlice.reducer;