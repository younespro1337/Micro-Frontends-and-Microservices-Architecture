// src/reducers/inputReducer.js
import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: { inputValue: 'MyApp' },
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer;
