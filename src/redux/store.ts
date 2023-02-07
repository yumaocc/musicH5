import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

//根节点类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
