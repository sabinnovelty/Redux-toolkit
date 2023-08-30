import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: { products: [], order: [] },
  reducers: {
    adProduct: (state) => {
      state.count += 1;
    },
    removeProduct: (state) => {
      state.count -= 1;
    },
  },
});

export const { addCount, decrementCount } = productSlice.actions;
export default productSlice.reducer;
