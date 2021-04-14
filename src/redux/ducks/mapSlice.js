import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import searchService from '../../api/search';

// Thunk here for search API
export const getLocalHospitals = createAsyncThunk(
  'map/getLocalHospitals',
  async (coords) => {
    const results = await searchService.findHospitals(coords);
    return results;
  },
);

const initialState = {
  userLocation: [43.6447778, -79.398395],
  mapResults: [],
  isModalOpen: false,
  isListLoading: true,
  selectedHospital: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.userLocation = [...payload];
    },
    openModal: (state, { payload }) => {
      state.isModalOpen = true;
      state.selectedHospital = payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedHospital = null;
    },
  },
  extraReducers: {
    [getLocalHospitals.fulfilled]: (state, { payload }) => {
      state.mapResults = [...payload];
      state.isListLoading = false;
    },
    [getLocalHospitals.pending]: (state) => {
      state.isListLoading = true;
    },
  },
});

export const { setLocation, openModal, closeModal } = mapSlice.actions;

export default mapSlice.reducer;
