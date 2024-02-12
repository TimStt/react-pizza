import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const pizzafetch = createAsyncThunk('card/fetcPCardStatus', async (id) => {
  const apiUrl = 'https://6555201463cafc694fe778bf.mockapi.io/products';

  const { data } = await axios.get(`${apiUrl}/${id}`);

  return data;
});

const initialState = {
  pizza: [],
  status: 'loading',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.pizza = action.payload;
    },
  },
  extraReducers: {
    [pizzafetch.fulfilled]: (state, action) => {
      state.pizza = action.payload;
      state.status = 'success';
      console.log('успешно');
    },
    [pizzafetch.pending]: (state) => {
      state.pizza = [];
      state.status = 'loading';
      console.log('загрузка');
    },
    [pizzafetch.rejected]: (state) => {
      state.status = 'error';
      state.pizza = [];
      console.log('ошибка');
    },
  },
});
export const selectPizza = (state) => state.card.pizza;
export const selectStatus = (state) => state.card.status;

export const { setItem } = cardSlice.actions;

export default cardSlice.reducer;
