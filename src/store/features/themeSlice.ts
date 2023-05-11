import { createSlice } from "@reduxjs/toolkit";

export type color = "dark" | "light";

interface Theme {
  color: color;
}

const initialState: Theme = {
  color: "light",
};

const themeSilce = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.color = state.color === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSilce.actions
export default themeSilce.reducer

