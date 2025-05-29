// lib/features/navToggle.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: true,
};

const navToggle = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleNav(state) {
      console.log(state.show);      
      state.show = state.show === true ? false : true;
    },
    setNav(state, action) {
      state.show = action.payload;
    },
  },
});

export const { toggleNav, setNav } = navToggle.actions;
export default navToggle.reducer;
