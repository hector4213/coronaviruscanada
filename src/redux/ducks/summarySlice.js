import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidService from '../../api/covid';

export const getTodaySummaries = createAsyncThunk(
  'summaries/getTodaySummaries',
  async () => {
    const todayData = await covidService.getSummaries();
    return todayData;
  },
);

export const getProvinceSummary = createAsyncThunk(
  'summaries/getProvinceSummary',
  async (provCode, userDate) => {
    const provData = await covidService.getProvinceSummary(provCode, userDate);
    return provData;
  },
);

const initialState = {
  summaries: [],
  currentProvince: null,
  isLoading: true,
  currentDate: '',
  today: [],
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
      state.today = state.today.concat(payload);
      state.isLoading = false;
    },
    [getProvinceSummary.fulfilled]: (state, { payload }) => {
      state.currentProvince = payload;
    },
  },
});

export const { setTodayDate } = summariesSlice.actions;

export default summariesSlice.reducer;
