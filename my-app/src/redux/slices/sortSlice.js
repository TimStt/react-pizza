import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: {
    id: 0,
    property: 'rating',
    name: 'популярности',
  },
  openPopup: false,
  valueCategory: 0,
  valuePage: 1,
  searchValue: '',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action) => {
      const { sortIndex, property, name } = action.payload;
      state.sort = {
        id: sortIndex,
        property,
        name,
      };
    },
    setOpenPopup: (state, action) => {
      state.openPopup = action.payload;
    },
    setCategory: (state, action) => {
      state.valueCategory = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setPage: (state, action) => {
      state.valuePage = action.payload;
    },
    setParams: (state, action) => {
      const { valueCategory, valuePage, sort, idSort } = action.payload;
      const { name, property } = sort;
      state.valueCategory = Number(valueCategory);
      state.valuePage = Number(valuePage);
      state.sort = {
        id: Number(idSort),
        property: property,
        name: name,
      };
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { setSort, setOpenPopup, setCategory, setPage, setParams, setSearchValue } =
  sortSlice.actions;

export default sortSlice.reducer;
