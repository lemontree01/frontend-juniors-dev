import { createSlice } from "@reduxjs/toolkit";

export type color = "dark" | "light";

interface Theme {
  color: color;
}

const initialState: Theme = {
  color: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.color = state.color === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer

