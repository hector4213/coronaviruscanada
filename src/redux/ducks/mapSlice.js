import { createSlice } from '@reduxjs/toolkit';

// Thunk here for search API

const initialState = {
  userLocation: [43.6447778, -79.398395],
  mapResults: [],
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      const { latitude, longitude } = payload;
      state.userLocation = [latitude, longitude];
    },
  },
});

export const { setLocation } = mapSlice.actions;

export default mapSlice.reducer;
