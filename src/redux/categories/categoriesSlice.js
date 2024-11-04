import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '../../api/api';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await getCategories();
  return response.data;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    selectedCategory: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload !== state.selectedCategory ? action.payload : null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;