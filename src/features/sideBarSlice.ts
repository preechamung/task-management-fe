import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface ToggleState {
  isToggle: boolean;
}

const initialState: ToggleState = {
    isToggle: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isToggle = !state.isToggle;
    },
  },
});

export const { toggle } = toggleSlice.actions;

export const selectIsToggle = (state: RootState) => state.toggle.isToggle;

export default toggleSlice.reducer;
