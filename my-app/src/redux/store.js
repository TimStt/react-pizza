import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/sortSlice';
import basket from './slices/basketSlice';
import pizzas from './slices/pizzaSlice';
import card from './slices/cardSlice';

export const store = configureStore({
  reducer: {
    filter,
    basket,
    pizzas,
    card,
  },
});
