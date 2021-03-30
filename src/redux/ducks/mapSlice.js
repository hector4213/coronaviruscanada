import { createSlice } from '@reduxjs/toolkit';

// Thunk here for search API

const initialState = {
  userLocation: { lat: null, long: null },
  mapResults: [],
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      const { latitude, longitude } = payload;
      state.userLocation = {
        ...state.userLocation,
        lat: latitude,
        long: longitude,
      };
    },
  },
});

export const { setLocation } = mapSlice.actions;

export default mapSlice.reducer;
