import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import dashboardReducer from "store/reducer/dashboard";
import generalReducer from "store/reducer/general";

const reducer = combineReducers({
  dashboardReducer,
  generalReducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
