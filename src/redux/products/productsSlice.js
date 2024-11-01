import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/api';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await getProducts();
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    tech: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tech = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;