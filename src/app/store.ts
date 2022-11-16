import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import toggleReducer from "../features/sideBarSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
