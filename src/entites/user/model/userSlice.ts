import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { id: 1, name: "Игорь Акапулько" },
    users: [
      {id: 1, name: "Игорь Петрович Акапулько", description: "Администратор"},
      {id: 2, name: "Родионов Александр Фролович", description: "Сотрудник"},
      {id: 3, name: "Алексеева Мишель Якуновна", description: "Модератор"},
      {id: 4, name: "Мясников Гарри Рудольфович", description: "Сотрудник"},
      {id: 1, name: "Игорь Петрович Акапулько", description: "Администратор"},
      {id: 2, name: "Родионов Александр Фролович", description: "Сотрудник"},
      {id: 3, name: "Алексеева Мишель Якуновна", description: "Модератор"},
      {id: 4, name: "Мясников Гарри Рудольфович", description: "Сотрудник"},
      {id: 1, name: "Игорь Петрович Акапулько", description: "Администратор"},
      {id: 2, name: "Родионов Александр Фролович", description: "Сотрудник"},]
  },
  reducers: {
    sort(state, action) {
			state.users = state.users.sort((x, y) => x.name.localeCompare(y.name));
		},
  },
});

export default userSlice.reducer