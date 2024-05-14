import { configureStore } from "@reduxjs/toolkit";
import storageSlice from "entites/storage/model/storageSlice";
import userSlice from "entites/user/model/userSlice";
import accountsSlice from "entites/accounts/model/accountsSlice";
import groupSlice from "entites/group/model/groupSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    storage: storageSlice,
    user: userSlice,
    accounts: accountsSlice,
    group: groupSlice
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;