import { configureStore } from "@reduxjs/toolkit";
import storageSlice from "entites/storage/model/storageSlice";
import userSlice from "entites/user/model/userSlice";
import accountsSlice from "entites/accounts/model/accountsSlice";
import groupSlice from "entites/group/model/groupSlice";

export const store = configureStore({
  reducer: {
    storage: storageSlice,
    user: userSlice,
    accounts: accountsSlice,
    group: groupSlice
  },
});
