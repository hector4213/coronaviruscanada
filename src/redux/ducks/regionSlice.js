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
  hasSelected: false,
  selectedRegion: '',
};

const regionSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    clearRegionSummary: (state) => {
      state.hasSelected = false;
      state.regionData = null;
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
      state.hasSelected = true;
    },
  },
});

export const {
  clearRegionSummary,
  regionSelect,
  userHasSelected,
} = regionSlice.actions;

export default regionSlice.reducer;
