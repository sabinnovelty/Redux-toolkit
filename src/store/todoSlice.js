import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todoList: [1, 2, 3], text: '' },
  reducers: {
    addTodoItem: (state, payload) => {
      // push new item to todoLIst
      state.todoList = [payload, ...state.todoList];
    },
    removeItem: (state, payload) => {
      let filteredList = state.todoList.filter((todo) => {
        return todo !== payload;
      });
      state.todoList = filteredList;
    },
  },
});

export const { addTodoItem, removeItem } = todoSlice.actions;
export default todoSlice.reducer;
