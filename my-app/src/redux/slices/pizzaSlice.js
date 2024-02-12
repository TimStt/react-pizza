import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const pizzasfetch = createAsyncThunk(
  'pizzas/fetcPizzaStatus',
  async ({ valueCategory = 0, valueSort, limitPages, valuePage }) => {
    const apiUrl = 'https://6555201463cafc694fe778bf.mockapi.io/products';

    const { data } = await axios.get(
      `${apiUrl}?&category=${
        valueCategory || ''
      }&sortBy=${valueSort}&order=desc&limit=${limitPages}&page=${valuePage}`,
    );

    return data;
  },
);

const initialState = {
  product: [],
  status: 'loading',
};

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: {
    [pizzasfetch.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.status = 'success';
      console.log('успешно');
    },
    [pizzasfetch.pending]: (state) => {
      state.product = [];
      state.status = 'loading';
      console.log('загрузка');
    },
    [pizzasfetch.rejected]: (state) => {
      state.status = 'error';
      state.product = [];
      console.log('ошибка');
    },
  },
});

export const { setItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
