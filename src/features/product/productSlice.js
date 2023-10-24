import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchAllProductsByFilters, fetchCategories, fetchBrands } from './productAPI';

const initialState = {
  products: [],
  categories: [],
  brands: [],
  status: 'idle',
  totalItems: 0,
  value: 0,
};

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const fetchAllProductsByFiltersAsync = createAsyncThunk(
  'product/fetchAllProductsByFilters',
  async ({ filter, sort, pagination }) => {
    const response = await fetchAllProductsByFilters(filter, sort, pagination);

    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  'product/fetchBrands',
  async () => {
    const response = await fetchBrands();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await fetchCategories();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchAllProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.data.products;
        state.totalItems = action.payload.data.totalItems;
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export const selectBrands = (state) => state.product.brands;

export const selectCategories = (state) => state.product.categories;

export const selectTotalItems = (state) => state.product.totalItems;

export default productSlice.reducer;
