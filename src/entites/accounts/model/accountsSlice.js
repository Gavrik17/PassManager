import { createSlice } from "@reduxjs/toolkit";

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
			},
			{
				id: 2,
				name: "facebook.com",
				description: "Social web",
				login: "poiesd",
				password: "456456",
				lastused: "11 часов назад",
			},
			{
				id: 3,
				name: "youtube.com",
				description: "Video hosting",
				login: "cvbfuk",
				password: "9vbdfy34",
				lastused: "Только что",
			},
			{
				id: 4,
				name: "vk.com",
				description: "Social",
				login: "Fufuk",
				password: "sdfsdfsdfsdf",
				lastused: "1 час назад",
			},
			{
				id: 5,
				name: "facebook.com",
				description: "Social web",
				login: "poiesd",
				password: "456456",
				lastused: "11 часов назад",
			},
			{
				id: 6,
				name: "youtube.com",
				description: "Video hosting",
				login: "cvbfuk",
				password: "9vbdfy34",
				lastused: "Только что",
			},
			{
				id: 7,
				name: "vk.com",
				description: "Social",
				login: "Fufuk",
				password: "sdfsdfsdfsdf",
				lastused: "1 час назад",
			},
			{
				id: 8,
				name: "facebook.com",
				description: "Social web",
				login: "poiesd",
				password: "456456",
				lastused: "11 часов назад",
			},
			{
				id: 9,
				name: "youtube.com",
				description: "Video hosting",
				login: "cvbfuk",
				password: "9vbdfy34",
				lastused: "Только что",
			},
			{
				id: 10,
				name: "vk.com",
				description: "Social",
				login: "Fufuk",
				password: "sdfsdfsdfsdf",
				lastused: "1 час назад",
			},
			{
				id: 11,
				name: "facebook.com",
				description: "Social web",
				login: "poiesd",
				password: "456456",
				lastused: "11 часов назад",
			},
			
		],
	},
	reducers: {
		createAccount(state, action) {
			let date = Date()
			state.accounts.push({
				id: 1000,
				name: action.payload.title,
				description: action.payload.description,
				login: action.payload.login,
				password: action.payload.password,
				lastused: date,
			})
		},
	},
});

export const { createAccount } = accountSlice.actions;
export default accountSlice.reducer;
