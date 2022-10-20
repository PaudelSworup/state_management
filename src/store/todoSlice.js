import { createSlice } from "@reduxjs/toolkit";

const d =
  localStorage.getItem("todoI") != null
    ? JSON.parse(localStorage.getItem("todoI"))
    : [];

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: d,
  },
  reducers: {
    add: (state, actions) => {
      state.items.push(actions.payload);
      localStorage.setItem("todoI", JSON.stringify(state.items));
    },

    remove: (state, action) => {
      const filtered = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("todoI", JSON.stringify(filtered));
      window.location.reload();
    },
  },
});

export const { add, remove } = todoSlice.actions;

export const todoData = (state) => state.todos.items;

export default todoSlice.reducer;
