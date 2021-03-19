import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidService from '../../api/covid';
import fireApi from '../../firebase/fireApi';

export const getTodaySummaries = createAsyncThunk(
  'summaries/getTodaySummaries',
  async () => {
    const todayData = await covidService.getSummaries();
    return todayData;
  },
);

export const getProvinceSummary = createAsyncThunk(
  'summaries/getProvinceSummary',
  async ({ provCode, userDate }) => {
    const provData = await covidService.getProvinceSummary(provCode, userDate);
    return provData;
  },
);

export const getAppRegions = createAsyncThunk(
  'info/getAppRegions',
  async (province) => {
    const appRegions = await fireApi.fetchAppRegions(province);
    return appRegions;
  },
);

const initialState = {
  currentProvince: null,
  isLoading: true,
  currentDate: '',
  today: null,
  provinceRegions: [],
};

const summariesSlice = createSlice({
  name: 'summaries',
  initialState,
  reducers: {
    setTodayDate: (state, { payload }) => {
      state.currentDate = payload;
    },
  },
  extraReducers: {
    [getTodaySummaries.fulfilled]: (state, { payload }) => {
      state.today = payload;
      state.isLoading = false;
    },
    [getProvinceSummary.fulfilled]: (state, { payload }) => {
      state.currentProvince = payload;
    },
    [getAppRegions.fulfilled]: (state, { payload }) => {
      state.provinceRegions = payload;
    },
  },
});

export const { setTodayDate } = summariesSlice.actions;

export default summariesSlice.reducer;
