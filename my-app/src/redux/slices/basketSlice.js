import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  product: [],
  busketProduct: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.product = action.payload;
    },
    addItem: (state, action) => {
      const { dataId: addId } = action.payload;

      const isFind = state.busketProduct.find((pizza) => pizza.dataId === addId);

      if (isFind) {
        isFind.count++;
      } else {
        state.busketProduct.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    culcTotalPrice: (state) => {
      state.totalPrice = state.busketProduct.reduce(
        (acc, { price, count }) => acc + price * count,
        0,
      );
    },
    culcTotalCount: (state) => {
      state.totalCount = state.busketProduct.reduce((acc, { count }) => acc + count, 0);
    },
    subCount: (state, action) => {
      const id = action.payload;
      const updateObject = state.busketProduct.find((_, idPizza) => idPizza === id);

      switch (updateObject.count) {
        case 1:
          state.busketProduct.splice(id, 1);
          break;
        default:
          updateObject.count--;
      }
    },
    addCount: (state, action) => {
      state.busketProduct.find((_, idPizza) => idPizza === action.payload).count++;
    },
    delItem: (state, action) => {
      state.busketProduct.splice(action.payload, 1);
    },
    cleanBusket: (state) => {
      state.busketProduct = [];
    },
  },
});
export const selectBasket = (state) => state.basket;
export const selectPizzaById =
  (dataId) =>
  ({ basket }) =>
    basket.busketProduct.find((pizza) => pizza.dataId === dataId);

export const {
  setItem,
  addItem,
  cleanBusket,
  delItem,
  culcTotalPrice,
  subCount,
  addCount,
  culcTotalCount,
} = basketSlice.actions;

export default basketSlice.reducer;
