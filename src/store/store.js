import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    product: productReducer,
  },
});

export default store;
