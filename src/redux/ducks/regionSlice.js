import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidService from '../../api/covid';

export const getRegionSummary = createAsyncThunk(
  'regions/getRegionSummary',
  async ({ regionCode, userDate }) => {
    const regionData = await covidService.getRegionSummary(
      regionCode,
      userDate,
    );
    return regionData;
  },
);

const initialState = {
  regionData: null,
  selectedRegion: '',
};

const regionSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    clearRegionSummary: (state) => {
      state.regionData = null;
      state.selectedRegion = null;
    },
    regionSelect: (state, { payload }) => {
      state.selectedRegion = payload;
    },
    userHasSelected: (state, { payload }) => {
      state.hasSelected = payload;
    },
  },
  extraReducers: {
    [getRegionSummary.fulfilled]: (state, { payload }) => {
      state.regionData = payload;
    },
  },
});

export const {
  clearRegionSummary,
  regionSelect,
  userHasSelected,
} = regionSlice.actions;

export default regionSlice.reducer;
