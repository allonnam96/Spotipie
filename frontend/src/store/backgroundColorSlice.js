import { createSlice } from '@reduxjs/toolkit';

export const backgroundColorSlice = createSlice({
  name: 'backgroundColor',
  initialState: {
    value: '',
  },
  reducers: {
    setBackgroundColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBackgroundColor } = backgroundColorSlice.actions;

export const selectBackgroundColor = (state) => state.backgroundColor.value;

export default backgroundColorSlice.reducer;
